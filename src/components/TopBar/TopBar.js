import React, {useState, useEffect} from 'react';
import { useSelector } from "react-redux";
import BackgroundAudio from '../../assets/audio/myaudio.mp3';
import {Howl, Howler} from 'howler';
import Player from '../BackgroundAudioPlayer/Player';

import BG from '../../assets/images/bg.png';
import MobileBg from '../../assets/images/mobile-bg.jpeg';
import Volume from '../../assets/images/volume.svg';
import Save from '../../assets/images/save.svg';
import Select from '../../assets/images/select.svg';
import Answer_Bg from '../../assets/images/answer-bg.svg';
import Correct_Answer from '../../assets/images/correct-answer.svg';
import Wrong_Answer from '../../assets/images/wrong-answer.svg';
import CheckBox from '../../assets/images/check-box.svg';

import VolumeSm from '../../assets/images/volume-small.svg';

// import VolumeBtnSm from '../../assets/images/volume-sm.png';
// import VolumeBtn from '../../assets/images/volume_button.png';
// import Cross from '../../assets/images/cross.png';
// import CrossSm from '../../assets/images/cross-sm.png';
// import Tick from '../../assets/images/tick.png';

const TopBar = ({content}) => {
    const state = useSelector((state) => state);

    const responses_array = state.lesson.ques_response;

    // console.log(responses_array.length);

    const [playStatus, setPlayStatus] = useState(true);

    const playAudio = () => {
        const sound = new Howl ({
            src: BackgroundAudio
        });
        if (playStatus) {
            sound.play();
        }else{
            sound.pause();
        }
    }

    // useEffect(() => {
    //     playAudio();
    //     console.log(playStatus);
    // }, [playStatus]);

    return (
        <>
            <div class="ea-web-app">
                <img className="ea-bg" src={BG} alt="English Academy" />
                <div className="ea-volume ea-cursor ea-common">
                    <Player url={BackgroundAudio} flag={'background_audio'} />
                </div>
                <div className="ea-title-img ea-common">
                    <img src={Select} alt="Select" />
                </div>
                <div className="ea-answer ea-common">
                    <img src={Answer_Bg} alt="Answer BG" />

                    {responses_array.length > 0 && <>
                            
                        {responses_array.map((content) => 
                            <div>
                                {content === 'correct' ?
                                    <div className="ea-checkbox ea-checkbox-01 ea-common">
                                        <img src={Correct_Answer} alt="Checkbox" />
                                    </div>
                                    :
                                    <div className="ea-checkbox ea-checkbox-02 ea-common">
                                        <img src={Wrong_Answer} alt="Checkbox" />
                                    </div>
                                }
                            </div>
                        )}
                    
                    </>}

                    {/* <div class="ea-checkbox ea-checkbox-01 ea-common">
                        <img src={Correct_Answer} alt="Checkbox" />
                    </div>
                    <div class="ea-checkbox ea-checkbox-02 ea-common">
                        <img src={Wrong_Answer} alt="Checkbox" />
                    </div>
                    <div class="ea-checkbox ea-checkbox-03 ea-common">
                        <img src={Correct_Answer} alt="Checkbox" />
                    </div>
                    <div class="ea-checkbox ea-checkbox-04 ea-common">
                        <img src={Wrong_Answer} alt="Checkbox" />
                    </div>
                    <div class="ea-checkbox ea-checkbox-05 ea-common">
                        <img src={CheckBox} alt="Checkbox" />
                    </div>
                    <div class="ea-checkbox ea-checkbox-06 ea-common">
                        <img src={CheckBox} alt="Checkbox" />
                    </div> */}
                </div>
            </div>

            <div className="ea-mobile-app">
                <img className="ea-bg" src={MobileBg} alt="English Academy" />
                <div className="ea-save ea-common">
                    <img src={Save} alt="Save" />
                </div>
                <div className="ea-volume-small ea-common">
                    <img src={VolumeSm} alt="Volume Small" />
                </div>
                <div className="ea-answer ea-common">
                    <img src={Answer_Bg} alt="Answer BG" />
                    <div className="ea-checkbox ea-checkbox-01 ea-common">
                        <img src={Correct_Answer} alt="Checkbox" />
                    </div>
                    <div className="ea-checkbox ea-checkbox-02 ea-common">
                        <img src={Wrong_Answer} alt="Checkbox" />
                    </div>
                    <div className="ea-checkbox ea-checkbox-03 ea-common">
                        <img src={Correct_Answer} alt="Checkbox" />
                    </div>
                    <div className="ea-checkbox ea-checkbox-04 ea-common">
                        <img src={Wrong_Answer} alt="Checkbox" />
                    </div>
                    <div className="ea-checkbox ea-checkbox-05 ea-common">
                        <img src={CheckBox} alt="Checkbox" />
                    </div>
                    <div className="ea-checkbox ea-checkbox-06 ea-common">
                        <img src={CheckBox} alt="Checkbox" />
                    </div>
                </div>
                <div className="ea-title-img ea-common">
                    <img src={Select} alt="Select" />
                </div>
            </div>
        </>

        


        // <div className="row header-s1">
        //         <div className="col-md-3 mt-4 saveBtnLg">
        //             {/* for desktop */}
        //             <Player url={BackgroundAudio} flag={'background_audio'} />
        //             {/* <img src={VolumeBtn} className="play-img-s1" onClick={() => {playStatus === true ? setPlayStatus(false) : setPlayStatus(true)}} alt="speeker" /> */}
        //         </div>

        //         <div className="col-md-2 mt-4 saveBtnSm">
        //             {/* for mobile */}
        //             {/* <img src={VolumeBtnSm} onClick={() => {playStatus === true ? setPlayStatus(false) : setPlayStatus(true)}} alt="speeker" /> */}
        //         </div>

        //         <div className="col-md-6 mt-4">
        //             <div className="big-a-text-holder">
        //                 <h1>{content}</h1>
        //             </div>
        //         </div>

        //         <div className="col-md-3 mt-4 checkboxes">
        //             <div className="checkbox-holder">
        //                 {responses_array.length > 0 && <>
                            
        //                     {responses_array.map((content) => 
        //                         <div className="check-box">
        //                             {content === 'correct' ?
        //                                 <> <img src={Tick} alt="tick" /> </>
        //                                 :
        //                                 <> <img src={Cross} alt="cross" /></>
        //                             }
        //                         </div>
        //                         // {content == 'correct' ? 
        //                         //     <div className="check-box"><img src={Tick} alt="tick" /></div> 
        //                         //     : 
        //                         //     <div className="check-box"><img src={Cross} alt="cross" /></div>
        //                         // }
        //                     )}
                        
        //                 </>}
                        
        //             </div>
        //         </div>
        //     </div>
    )
}

export default TopBar;
