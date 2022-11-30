import YouTube from 'react-youtube';
import { useState } from 'react';

export default function App(){
  
  let playlist = [
    "NUiwTwpPGRk",
    "EG_CmgmltWQ",
    "FoYK1AinPnE"
  ];

  let index = 0;
  const [ytbID, setYtbID] = useState(playlist[index]);


    let player;

    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    function _onReady(event) {
      // access to player in all event handlers via event.target
      player = event.target;
    }

    function handlePause() {
      player.pauseVideo();
    }

    function handleStart() {
      player.playVideo();
    }

    function handleNext() {
      index++;
      setYtbID(playlist[index]);
      player.playVideo();
    }

    return <div>
      <YouTube videoId={ytbID} opts={opts} onReady={_onReady} />
      <button onClick={handlePause}>pause</button> <button onClick={handleStart}>Start</button>
      <button onClick={handleNext}>NextSong</button>
    </div>;
  }