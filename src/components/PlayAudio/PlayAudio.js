import React from 'react';
import {Howl, Howler} from 'howler'
import PlayBtn from '../../assets/images/play_audio.png';
import { useSelector } from 'react-redux';
import './PlayAudio.css';
import myaudio from '../../scos/75215/media/audio/myaudio.mp3'


const PlayAudio = ({audio}) => {
    const state = useSelector((state) => state);
    const sco_num = state.config.sco_number

    // const myaudio = require(`../../scos/${sco_num}/media/audio/${audio}`);
    
    const soundPlay = (sond) => {
        const sound = new Howl({
            src: sond
        });
        sound.play();
    }

    return (
        <div>
            
            <button className="audio-btn" onClick={soundPlay(myaudio)}>
                
                <img src={PlayBtn} alt="play" />
            </button>
        </div>
    );
}


export default PlayAudio;