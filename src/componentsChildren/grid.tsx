import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import RecipeReviewCard from '@/components/ui/complexCard';

export default function ComplexGrid() { 
    const [posts, setPosts] = useState<Post[]>([]);
    const navigate = useNavigate();

    interface Post {
        id: number | string;
        title: string;
        content: string;
        imageUrl: string | null;
    }

    useEffect(() => { // data is stored in local storage
        const cachedPosts = localStorage.getItem('posts');
        if(cachedPosts){
            setPosts(JSON.parse(cachedPosts));
        }
    }, []);

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
            <Grid container spacing={2}>
                {posts.map((post) => (
                    <Grid item xs={12} sm={6} key={post.id}>
                        <RecipeReviewCard post={post} />

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
                ))}
            </Grid>
        </Paper>
    );
}
