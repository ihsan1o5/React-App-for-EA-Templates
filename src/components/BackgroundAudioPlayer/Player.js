import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Volume from '../../assets/images/volume.svg';
import Play from '../../assets/images/play.svg';

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

//   useEffect(() => {
//     audio.addEventListener('ended', () => setPlaying(false));
//     return () => {
//       audio.removeEventListener('ended', () => setPlaying(false));
//     };
//   }, []);

  return [playing, toggle];
};

const Player = ({ url, flag }) => {

    let audio_url = null;
    const state = useSelector((state) => state);
    const sco_num = localStorage.getItem('sco_number');
    if (flag == 'question_audio') {
      audio_url = require(`../../../public/scos/${sco_num}/media/audio/${url}`)
    }

    console.log(audio_url);

    const [playing, toggle] = useAudio(flag == 'background_audio' ? url : audio_url.default);

    return (
        <div>
          {flag == 'background_audio' ?
            <img src={Volume} onClick={toggle} className="play-img-s1" alt="speeker" />
            :
            <img src={Play} onClick={toggle} className="mx-auto d-block" alt="speeker" />
          }
            
        </div>
    );
};

export default Player;