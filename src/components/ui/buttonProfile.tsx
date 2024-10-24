import * as React from 'react';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import AlertTitle from '@mui/material/AlertTitle';
import { Alert } from '@mui/material';

export default function IconLabelButtons() {
  const [isFollowing, setIsFollowing] = React.useState(false);
  const [useLike, setLike] = React.useState(false); 
  const [showAlert, setShowAlert] = React.useState(false);

  const [followers, setFollowers] = React.useState(100);
  
  const handleClick = () => {
    setIsFollowing(!isFollowing);
    setFollowers(isFollowing ? followers - 1 : followers + 1); 
  };

  const handleLike = () => { 
    setLike(!useLike); 
  }

  const handleMessageClick = () => {
    setShowAlert(true);

    setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    };

  return (
    <>
    <Stack direction="row" spacing={2}>
      <Button
         sx={{ borderColor: 'black', color: 'black' }}
        variant="outlined"
        startIcon={isFollowing ? <FavoriteIcon sx={{ color: 'red' }} /> : <FavoriteBorderIcon />}
        onClick={handleClick}
      >
        {isFollowing ? `Following (${followers})` : `Follow (${followers})`}
      </Button>

      <Button 
        variant="contained" 
        sx={{ borderColor: 'black', color: 'white', backgroundColor: 'black' }}
        endIcon={<SendIcon />}
        onClick={handleMessageClick}
      >
        Message
      </Button>

      <Button 
        variant="contained" 
        sx={{ borderColor: 'black', color: 'white', backgroundColor: 'black' }}
        onClick={handleLike}
        endIcon={useLike ? <ThumbDownAltIcon sx={{ color: 'white' }}  /> : <ThumbUpAltIcon />}   
      >
        {useLike ? 'Deslike' : 'Like'}
      </Button>

    </Stack>

    {showAlert && (
        <Alert severity="success" sx={{ marginTop: 2 }}>
        <AlertTitle>Success</AlertTitle>
        Message sent successfully!
        </Alert>
    )}
  </>
  );
}
