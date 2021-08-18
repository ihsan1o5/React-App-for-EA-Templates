import React, {useState} from 'react';
import VolumeBtnSm from '../../assets/images/volume-sm.png';
import VolumeBtn from '../../assets/images/volume_button.png';
import Cross from '../../assets/images/cross.png';
import CrossSm from '../../assets/images/cross-sm.png';
import Tick from '../../assets/images/tick.png';
import BackgroundAudio from '../../scos/75215/media/audio/myaudio.mp3';
import {Howl, Howler} from 'howler';

const TopBar = ({content}) => {
    const [playStatus, setPlayStatus] = useState(false);
    const playAudio = () => {
        const sound = new Howl ({
            src: BackgroundAudio
        });
        
        if (playStatus == false) {
            setPlayStatus(true);
            sound.play();
            console.log(playStatus);
        }else{
            setPlayStatus(false);
            sound.pause();
            console.log(playStatus);
        }
        
    }

    return (
        <div className="row header-s1">
                <div className="col-md-3 mt-4 saveBtnLg">
                    {/* for desktop */}
                    <img src={VolumeBtn} className="play-img-s1" onClick={playAudio} alt="speeker" />
                </div>

                <div className="col-md-2 mt-4 saveBtnSm">
                    {/* for mobile */}
                    <img src={VolumeBtnSm} onClick={playAudio} alt="speeker" />
                </div>

                <div className="col-md-6 mt-4">
                    <div className="big-a-text-holder">
                        <h1>{content}</h1>
                    </div>
                </div>

                <div className="col-md-3 mt-4 checkboxes">
                    <div className="checkbox-holder">
                        <div className="check-box">
                            <img src={Cross} alt="cross" />
                        </div>
                        <div className="check-box">
                            <img src={Tick} alt="tick" />
                        </div>
                        <div className="check-box">
                            <img src={Cross} alt="cross" />
                        </div>
                        <div className="check-box">
                            <img src={Tick} alt="tick" />
                        </div>
                        <div className="check-box">
                            <img src={Tick} alt="tick" />
                        </div>
                        <div className="check-box">
                            <img src={Cross} alt="cross" />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default TopBar;
