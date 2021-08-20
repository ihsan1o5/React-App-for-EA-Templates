import React from 'react'
import { useSelector } from "react-redux";
import "./Questions.css";
import Cow from '../../assets/images/cow.png';
// import MyCow from '../../scos/75215/media/images/cow.png';
import Bunny from '../../assets/images/bunny.png';
import PlayBtn from '../../assets/images/play_audio.png';
import {Howl, Howler} from 'howler';
import TopBar from '../../components/TopBar/TopBar';

function FirstQues () {

    const state = useSelector((state) => state);
    // console.log('all lesson data in questions......',state.config.lang);

    return (
        <div>
            
            <h1>Hello this is first slide</h1>

        </div>
    )
};

function Second () {

    const state = useSelector((state) => state);
    // console.log(state.lesson.lesson[0].exercises[0].questions[0]);
    const ques = state.lesson.lesson[0].exercises[0].questions[0]
    // console.log(Lesson.responses);
    return (
        <div className="container-fluid">
            <TopBar content={ques.content} />    

            <div className="row top-margin">
                <div className="col-md-1"></div>
                {ques.responses.map((res, index) => 
                    <div key={index} className="col-md-5 col-margin-top-sm">
                        <div className="text-holder-s1">
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
        <div className="container-fluid">
            <TopBar content={ques.content} /> 

            <div className="row top-margin">
                <div className="col-md-1"></div>
                {ques.responses.map((res, index) => 
                    <div key={index} className="col-md-5 col-margin-top-sm">
                        <div className="img-holder-s1">
                            {res._data.map((content, index) =>
                                <img className="mx-auto d-block" src={`/scos/${sco_num}/media/images/${content.content}`} alt={content.content} />
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
        <div className="container-fluid">
            <TopBar content={ques.content} /> 

            <div className="row top-margin">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <div className="img-holder-s2">
                        <img src={Bunny} className="mx-auto d-block" alt="cow" />
                    </div>
                </div>
                <div className="col-md-5">
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

    const playAudio = () => {
        console.log('this is playing');
    }

    const state = useSelector((state) => state);
    const sco_num = state.config.sco_number;
    const lang = state.config.lang;

    // console.log(state.lesson.lesson[0].exercises[0].questions[0]);
    const ques = state.lesson.lesson[0].exercises[0].questions[3]

    return (
        <div className="container-fluid">
            <TopBar content={ques.content} /> 

            <div className="row top-margin">
                <div className="col-md-1"></div>
                {ques.responses.map((res) =>
                    <div className="col-md-5">
                        <div className="row">
                            {res._data.map((content) =>
                                <>
                                    <div className="col-sm-12">
                                        <img src={PlayBtn} className="mx-auto d-block" onClick={playAudio} alt="paly btn" />
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="res-text-holder-s3">
                                            <h1>{content.content}</h1>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}
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
        <div className="container-fluid">
            <TopBar content={ques.content} /> 

            <div className="row top-margin">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <div className="img-holder-s2">
                        <img src={Bunny} className="mx-auto d-block" alt="cow" />
                    </div>
                </div>
                <div className="col-md-5">
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
        <div className="container-fluid">
            <TopBar content={ques.content} /> 

            <div className="row top-margin">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <div className="img-holder-s2">
                        <img src={Bunny} className="mx-auto d-block" alt="cow" />
                    </div>
                </div>
                <div className="col-md-5">
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
        <div className="container-fluid">
            <TopBar content={ques.content} /> 

            <div className="row top-margin">
                <div className="col-md-1"></div>
                {ques.responses.map((res) => 
                    <div className="col-md-5 col-margin-top-sm">
                        <div className="img-holder-s2">
                            {res._data.map((content) =>
                                <img className="mx-auto d-block" src={`/scos/${sco_num}/media/images/${content.content}`} alt={content.content} />
                            )}
                        </div>
                    </div>
                )}
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
        <div className="container-fluid">
            <TopBar content={ques.content} /> 

            <div className="row top-margin">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <div className="img-holder-s2">
                        <img src={Bunny} className="mx-auto d-block" alt="cow" />
                    </div>
                </div>
                <div className="col-md-5">
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

export {Second, FirstQues, Third, Fifth, Sixth, SeventhQues, EightQues, NinethQues, TenthQues};

