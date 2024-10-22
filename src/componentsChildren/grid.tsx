import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import {useNavigate, Navigate} from "react-router-dom";


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() { 
    const [posts, setPosts] = useState<Post[]>([]);

    const navigate = useNavigate();//here
  

    interface Post {
        id: number | string;
        title: string;
        content: string;
        imageUrl: string | null;
      }


    useEffect(() => { // to get the posts from local storage cache
    const cachedPosts = localStorage.getItem('posts');
        if(cachedPosts){
            setPosts(JSON.parse(cachedPosts));
        }
    } , []);

    const removePost = (id: number | string) => {
        const updatedPosts = posts.filter(post => post.id !== id);
        setPosts(updatedPosts);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
    };




 return (
  <Paper
    sx={(theme) => ({
      p: 2,
      margin: 'auto',
      maxWidth: '100%', 
      backgroundColor: '#fff',
      ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
      }),
    })}
  >
    <Grid container spacing={3}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} key={post.id} sx={{ borderBottom: '1px solid green' }}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }} onClick={() => navigate(`/Edit/${post.id}`)}>
                {post.imageUrl ? (
                  <img src={post.imageUrl} alt="Cache" />
                ) : (
                  <p>No image available</p>
                )}
              </ButtonBase>
            </Grid>

            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
                {post.title }
              </Typography>
              <Typography variant="body2" gutterBottom>
                {post.content}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                ID: {post.id}
              </Typography>
              <Button
                sx={{
                  width: 150,
                  color: 'success.main',
                  mt: 2,
                }}
                onClick={() => removePost(post.id)}
              >
                Remove
              </Button>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  </Paper>
);}
