
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Fade} from '@mui/material';
import { Box } from '@mui/material';
import {Modal} from '@mui/material';
import { useState } from 'react';
import { Perfil } from '@/componentsChildren/routePerfil';



interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));


export default function RecipeReviewCard({ post }: RecipeReviewCardProps) {
    const [expanded, setExpanded] = useState(false);
    const [useNavigateProfile, setNavigateProfile] = useState(false);
    const [useFavorite, setFavorite] = useState(false);

    const [open, setOpen] = useState(false); ///modal
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false); // modal
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const handleGoProfile = () => {
      setNavigateProfile(true); 
    };

    const handleFavorite = () => {
      setFavorite(!useFavorite); 
    }
    
  
  
    return (
      <>
        <div></div>
        
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{ bgcolor: 'black' }}
                onClick={handleOpen}
                aria-label="profile-avatar"
              >
                <img src="/src/assets/thumb-1920-365264.jpeg" alt="avatar" />
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={post.title} 
            subheader={post.id} 
          />
          {post.imageUrl && (
            <CardMedia
              component="img"
              height="194"
              image={post.imageUrl}
              alt={post.title}
            />
          )}
          <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {post.content}
            </Typography>
          </CardContent>
    
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={handleFavorite}>
              <FavoriteIcon sx={{ color: useFavorite ? 'red' : 'default' }} />
            </IconButton>
    
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
    
            <IconButton
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              sx={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }}
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
    
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography>{post.content}</Typography>
            </CardContent>
          </Collapse>
                    
                      <Modal open={open} onClose={handleClose}>
                        <Fade in={open} timeout={{ enter: 500, exit: 300 }}>
                          <Box
                            sx={{
                              width: '60%',
                              height: '60%',
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              p: 2,
                              bgcolor: 'black',
                              borderRadius: 1,
                              boxShadow: 24,
                              
                            }}
                          >
                      <Perfil />
                </Box>
              </Fade>
          </Modal>
        </Card>
      </>
    );
  }    