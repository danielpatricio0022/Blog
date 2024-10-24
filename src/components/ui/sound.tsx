import React from 'react';
import useSound from 'use-sound'; 
import IconLabelButtons from './buttonProfile';


function RisingDemo() {
  const soundUrl = '/src/sounds/pop-39222.mp3'

// this is the sound file that will be played when the button is clicked
// this hook is used to play the sound file

  const [playbackRate, setPlaybackRate] = React.useState(0.75);

  const [play] = useSound(soundUrl, {
    playbackRate,
    volume: 0.5,
  });

  const handleClick = () => {
    setPlaybackRate(playbackRate + 0.1);
    play();
  };

  return (
   
    <button  onClick={handleClick}>
      <span role="img" aria-label="Like this post">
         <IconLabelButtons /> 
      </span>
    </button>
  );
}

export default RisingDemo;