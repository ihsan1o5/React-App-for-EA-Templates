import React from 'react'
import { useSelector } from "react-redux";
import "./Questions.css";
import VolumeBtn from '../../assets/images/volume_button.png';
import Cross from '../../assets/images/cross.png';
import CrossSm from '../../assets/images/cross-sm.png';
import Tick from '../../assets/images/tick.png';
import TickSm from '../../assets/images/tick-sm.png';
import SaveBtn from '../../assets/images/save_button.png';
import SaveBtnSm from '../../assets/images/save-sm.png';
import Cow from '../../assets/images/cow.png';
import Bunny from '../../assets/images/bunny.png';
import PlayBtn from '../../assets/images/play_audio.png';
import VolumeBtnSm from '../../assets/images/play-button-sm.png';
import Star from '../../assets/images/star.png';
import {Howl, Howler} from 'howler';

function FirstQues () {

    const state = useSelector((state) => state);
    // console.log('all lesson data in questions......',state.config.lang);

    return (
        <div>
            
            <h1>Hello</h1>

        </div>
    )
};

function Second () {
    const state = useSelector((state) => state);
    // console.log(state.lesson.lesson[0].exercises[0].questions[0]);
    const ques = state.lesson.lesson[0].exercises[0].questions[0]
    // console.log(Lesson.responses);
    return (
        <div>
            <div className="row header-s1">
                <div className="col-md-2 header-item-s1 saveBtnLg">
                    {/* for desktop */}
                    <img src={SaveBtn} className="save-img-s2" alt="save" />
                    <img src={VolumeBtn} className="play-img-s1" alt="speeker" />
                </div>

                <div className="col-md-2 header-item-s1 saveBtnSm">
                    {/* for mobile */}
                    <img src={SaveBtnSm} className="save-img-s2" alt="save" />
                    <img src={VolumeBtnSm} className="play-img-s1" alt="speeker" />
                </div>

                <div className="col-md-7 header-item-s1">
                    <div className="big-a-text-holder">
                        <h1>{ques.content}</h1>
                    </div>
                </div>

                <div className="col-md-3 header-item-s1 checkboxes">
                    <div className="checkbox-holder Lg">
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
                        <div className="check-box"></div>
                        <div className="check-box"></div>
                    </div>
                </div>
            </div>

            <div className="row content-s1">
                <div className="col-md-1"></div>
                {ques.responses.map((res, index) => 
                    <div key={index} className="col-md-5 content-item-s1">
                        <div className="img-holder-s1">
                            {res._data.map((content, index) =>
                                <h1 key={index}>{content.content}</h1>
                            )}
                        </div>
                    </div>
                )}
                <div className="col-md-1"></div>
            </div>
        </div>
    )
}

const Third = () => {
    const state = useSelector((state) => state);
    const sco_num = state.config.sco_number;
    const lang = state.config.lang;

    // console.log(state.lesson.lesson[0].exercises[0].questions[0]);
    const ques = state.lesson.lesson[0].exercises[0].questions[1]
    // console.log(Lesson);

    return (
        <div>
            <div className="row header-s1">
                <div className="col-md-2 header-item-s1 saveBtnLg">
                    {/* for desktop */}
                    <img src={SaveBtn} className="save-img-s2" alt="save" />
                    <img src={VolumeBtn} className="play-img-s1" alt="speeker" />
                </div>

                <div className="col-md-2 header-item-s1 saveBtnSm">
                    {/* for mobile */}
                    <img src={SaveBtnSm} className="save-img-s2" alt="save" />
                    <img src={VolumeBtnSm} className="play-img-s1" alt="speeker" />
                </div>
                
                <div className="col-md-7 header-item-s1">
                    <div className="big-a-text-holder">
                        <h1>{ques.content}</h1>
                    </div>
                </div>

                <div className="col-md-3 header-item-s1 checkboxes">
                    <div className="checkbox-holder Lg">
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
                        <div className="check-box"></div>
                        <div className="check-box"></div>
                    </div>
                </div>
            </div>

            <div className="row content-s1">
                <div className="col-md-1"></div>
                {ques.responses.map((res, index) => 
                    <div key={index} className="col-md-5 content-item-s1">
                        <div className="img-holder-s1">
                            {res._data.map((content, index) =>
                                <img src={`../../scos/${sco_num}/media/images/${content.content}`} alt={content.content} />
                            )}
                        </div>
                    </div>
                )}
                <div className="col-md-1"></div>
            </div>
        </div>
    )
};

const Fifth = () => {
    const state = useSelector((state) => state);
    const sco_num = state.config.sco_number;
    const lang = state.config.lang;

    // console.log(state.lesson.lesson[0].exercises[0].questions[0]);
    const ques = state.lesson.lesson[0].exercises[0].questions[2]

    return (
        <div>
            <div className="row header-s1">
                <div className="col-md-2 header-item-s1 saveBtnLg">
                    {/* for desktop */}
                    <img src={SaveBtn} className="save-img-s2" alt="save" />
                    <img src={VolumeBtn} className="play-img-s1" alt="speeker" />
                </div>

                <div className="col-md-2 header-item-s1 saveBtnSm">
                    {/* for mobile */}
                    <img src={SaveBtnSm} className="save-img-s2" alt="save" />
                    <img src={VolumeBtnSm} className="play-img-s1" alt="speeker" />
                </div>

                <div className="col-md-7 header-item-s1">
                    <div className="big-a-text-holder">
                        <h1>{ques.content}</h1>
                    </div>
                </div>

                <div className="col-md-3 header-item-s1 checkboxes">
                    <div className="checkbox-holder Lg">
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
                        <div className="check-box"></div>
                        <div className="check-box"></div>
                    </div>
                </div>
            </div>

            <div className="row content-s1">
                <div className="col-md-1"></div>
                <div className="col-md-5 content-item">
                    <div className="img-holder-s2">
                        <img src={Bunny} alt="cow" />
                    </div>
                </div>
                <div className="col-md-5 content-item">
                    {ques.responses.map((res) =>
                        <div>
                            {res._data.map((content) =>
                                <div className="res-text-holder-s3">
                                    <h1>{content.content}</h1>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className="col-md-1"></div>
            </div>

        </div>
    )
};

const Sixth = () => {
    const state = useSelector((state) => state);
    const sco_num = state.config.sco_number;
    const lang = state.config.lang;

    // console.log(state.lesson.lesson[0].exercises[0].questions[0]);
    const ques = state.lesson.lesson[0].exercises[0].questions[3]

    const playAudio = (path) => {
        console.log(path);
        const sound = new Howl({
            src: path
        });
    }

    return (
        <div>
            <div className="row header-s1">
                <div className="col-md-2 header-item-s1 saveBtnLg">
                    {/* for desktop */}
                    <img src={SaveBtn} className="save-img-s2" alt="save" />
                    <img src={VolumeBtn} className="play-img-s1" alt="speeker" />
                </div>

                <div className="col-md-2 header-item-s1 saveBtnSm">
                    {/* for mobile */}
                    <img src={SaveBtnSm} className="save-img-s2" alt="save" />
                    <img src={VolumeBtnSm} className="play-img-s1" alt="speeker" />
                </div>

                <div className="col-md-7 header-item-s1">
                    <div className="big-a-text-holder">
                        <h1>{ques.content}</h1>
                    </div>
                </div>

                <div className="col-md-3 header-item-s1 checkboxes">
                    <div className="checkbox-holder Lg">
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
                        <div className="check-box"></div>
                        <div className="check-box"></div>
                    </div>
                </div>
            </div>

            <div className="row content-s1">
                <div className="col-md-1"></div>
                <div className="col-md-5 content-item">
                    <div className="row">
                        <div className="col-sm-12 sub-content-s4">
                            <img src={PlayBtn} onClick={playAudio('this')} alt="paly btn" />
                        </div>
                        <div className="col-sm-12 sub-content-s4">
                            <div className="res-text-holder-s3">
                                <h1>A</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-5 content-item">
                    <div className="row">
                        <div className="col-sm-12 sub-content-s4">
                            <img src={PlayBtn} alt="paly btn" />
                        </div>
                        <div className="col-sm-12 sub-content-s4">
                            <div className="res-text-holder-s3">
                                <h1>B</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
                
            </div>
        </div>
    )
};

const SeventhQues = () => {
    const state = useSelector((state) => state);
    const sco_num = state.config.sco_number;
    const lang = state.config.lang;

    // console.log(state.lesson.lesson[0].exercises[0].questions[0]);
    const ques = state.lesson.lesson[0].exercises[0].questions[4]

    return (
        <div>
            <div className="row header-s1">
                <div className="col-md-2 header-item-s1 saveBtnLg">
                    {/* for desktop */}
                    <img src={SaveBtn} className="save-img-s2" alt="save" />
                    <img src={VolumeBtn} className="play-img-s1" alt="speeker" />
                </div>

                <div className="col-md-2 header-item-s1 saveBtnSm">
                    {/* for mobile */}
                    <img src={SaveBtnSm} className="save-img-s2" alt="save" />
                    <img src={VolumeBtnSm} className="play-img-s1" alt="speeker" />
                </div>

                <div className="col-md-7 header-item-s1">
                    <div className="big-a-text-holder">
                        <h1>{ques.content}</h1>
                    </div>
                </div>

                <div className="col-md-3 header-item-s1 checkboxes">
                    <div className="checkbox-holder Lg">
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
                        <div className="check-box"></div>
                        <div className="check-box"></div>
                    </div>
                </div>
            </div>

            <div className="row content-s1">
                <div className="col-md-1"></div>
                <div className="col-md-5 content-item">
                    <div className="img-holder-s2">
                        <img src={Bunny} alt="cow" />
                    </div>
                </div>
                <div className="col-md-5 content-item">
                {ques.responses.map((res) =>
                        <div>
                            {res._data.map((content) =>
                                <div className="res-text-holder-s3">
                                    <h1>{content.content}</h1>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
};

const EightQues = () => {
    const state = useSelector((state) => state);
    const sco_num = state.config.sco_number;
    const lang = state.config.lang;

    // console.log(state.lesson.lesson[0].exercises[0].questions[0]);
    const ques = state.lesson.lesson[0].exercises[0].questions[5]

    return (
        <div>
            <div className="row header-s1">
                <div className="col-md-2 header-item-s1 saveBtnLg">
                    {/* for desktop */}
                    <img src={SaveBtn} className="save-img-s2" alt="save" />
                    <img src={VolumeBtn} className="play-img-s1" alt="speeker" />
                </div>

                <div className="col-md-2 header-item-s1 saveBtnSm">
                    {/* for mobile */}
                    <img src={SaveBtnSm} className="save-img-s2" alt="save" />
                    <img src={VolumeBtnSm} className="play-img-s1" alt="speeker" />
                </div>

                <div className="col-md-7 header-item-s1">
                    <div className="big-a-text-holder">
                        <h1>{ques.content}</h1>
                    </div>
                </div>

                <div className="col-md-3 header-item-s1 checkboxes">
                    <div className="checkbox-holder Lg">
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
                        <div className="check-box"></div>
                        <div className="check-box"></div>
                    </div>
                </div>
            </div>

            <div className="row content-s1">
                <div className="col-md-1"></div>
                <div className="col-md-5 content-item">
                    <div className="img-holder-s2">
                        <img src={Bunny} alt="cow" />
                    </div>
                </div>
                <div className="col-md-5 content-item">
                {ques.responses.map((res) =>
                        <div>
                            {res._data.map((content) =>
                                <div className="res-text-holder-s3">
                                    <h1>{content.content}</h1>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
};

const NinethQues = () => {
    const state = useSelector((state) => state);
    const sco_num = state.config.sco_number;
    const lang = state.config.lang;

    // console.log(state.lesson.lesson[0].exercises[0].questions[0]);
    const ques = state.lesson.lesson[0].exercises[0].questions[6]

    return (
        <div>
            <div className="row header-s1">
                <div className="col-md-2 header-item-s1 saveBtnLg">
                    {/* for desktop */}
                    <img src={SaveBtn} className="save-img-s2" alt="save" />
                    <img src={VolumeBtn} className="play-img-s1" alt="speeker" />
                </div>

                <div className="col-md-2 header-item-s1 saveBtnSm">
                    {/* for mobile */}
                    <img src={SaveBtnSm} className="save-img-s2" alt="save" />
                    <img src={VolumeBtnSm} className="play-img-s1" alt="speeker" />
                </div>

                <div className="col-md-7 header-item-s1">
                    <div className="big-a-text-holder">
                        <h1>{ques.content}</h1>
                    </div>
                </div>

                <div className="col-md-3 header-item-s1 checkboxes">
                    <div className="checkbox-holder Lg">
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
                        <div className="check-box"></div>
                        <div className="check-box"></div>
                    </div>
                </div>
            </div>

            <div className="row content-s1">
                <div className="col-md-1"></div>
                <div className="col-md-5 content-item-s1">
                    <div className="img-holder-s2">
                        <img src={Cow} alt="cow" />
                    </div>
                </div>
                <div className="col-md-5 content-item-s1">
                    <div className="img-holder-s2">
                        <img src={Bunny} alt="bunny" />
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
};

const TenthQues = () => {
    const state = useSelector((state) => state);
    const sco_num = state.config.sco_number;
    const lang = state.config.lang;

    // console.log(state.lesson.lesson[0].exercises[0].questions[0]);
    const ques = state.lesson.lesson[0].exercises[0].questions[7]

    return (
        <div>
            <div className="row header-s1">
                <div className="col-md-2 header-item-s1 saveBtnLg">
                    {/* for desktop */}
                    <img src={SaveBtn} className="save-img-s2" alt="save" />
                    <img src={VolumeBtn} className="play-img-s1" alt="speeker" />
                </div>

                <div className="col-md-2 header-item-s1 saveBtnSm">
                    {/* for mobile */}
                    <img src={SaveBtnSm} className="save-img-s2" alt="save" />
                    <img src={VolumeBtnSm} className="play-img-s1" alt="speeker" />
                </div>

                <div className="col-md-7 header-item-s1">
                    <div className="big-a-text-holder">
                        <h1>{ques.content}</h1>
                    </div>
                </div>

                <div className="col-md-3 header-item-s1 checkboxes">
                    <div className="checkbox-holder Lg">
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
                        <div className="check-box"></div>
                        <div className="check-box"></div>
                    </div>
                </div>
            </div>

            <div className="row content-s1">
                <div className="col-md-1"></div>
                <div className="col-md-5 content-item">
                    <div className="img-holder-s2">
                        <img src={Bunny} alt="cow" />
                    </div>
                </div>
                <div className="col-md-5 content-item">
                {ques.responses.map((res) =>
                        <div>
                            {res._data.map((content) =>
                                <div className="res-text-holder-s3">
                                    <h1>{content.content}</h1>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className="col-md-1"></div>
            </div>

            {/* <div className="row content-s1">
                <div className="col-md-1"></div>
                <div className="col-md-5 content-item">
                    <div className="img-holder-s5">
                        <img src={Bunny} alt="bunny" />
                    </div>
                </div>

                <div className="col-md-1"></div>
                <div className="col-md-3 content-item">
                    <div className="row">
                        {ques.responses.map((res) =>
                            <div className="col-sm-12">
                                {res._data.map((content) =>
                                    <div className="res-text-holder-s3">
                                        <h1>{content.content}</h1>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-md-2"></div>
                
            </div> */}
        </div>
    )
};

export {Second, FirstQues, Third, Fifth, Sixth, SeventhQues, EightQues, NinethQues, TenthQues};

