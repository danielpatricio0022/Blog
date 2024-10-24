
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
import { useState } from 'react';
import { Navigate } from "react-router-dom";


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
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const handleGoProfile = () => {
      setNavigateProfile(true); 
    };
    
    if (useNavigateProfile) {
      return <Navigate to="/Profile" replace={true} />;
    }
  
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'black' }} aria-label="recipe"
             onClick={handleGoProfile}
            >
              <img src="/src/assets/thumb-1920-365264.jpeg" alt="avatar" />
             
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={post.title} //
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
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>{post.content}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }