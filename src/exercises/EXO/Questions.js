import React, {useEffect} from 'react'
import { connect } from "react-redux";
import { useSelector } from "react-redux";
// import "./Questions.css";
// import MyCow from '../../scos/75215/media/images/cow.png';


import A from '../../assets/images/a.svg';
import B from '../../assets/images/b.svg';
import Cow from '../../assets/images/cow.svg';
import Rabit from '../../assets/images/rabit.svg';
import Bunny from '../../assets/images/Bunny.svg';
import Crocodile from '../../assets/images/crocodile.svg';
import Play from '../../assets/images/play.svg';
import Play_A from '../../assets/images/play-a.svg';
import Play_B from '../../assets/images/play-b.svg';
import TV from '../../assets/images/tv.svg';
import Yes from '../../assets/images/yes.svg';
import No from '../../assets/images/no.svg';

// import PlayBtn from '../../assets/images/play_audio.png';
import {Howl, Howler} from 'howler';
import TopBar from '../../components/TopBar/TopBar';
import { response_to_a_question } from '../../redux/actions/slider';
import Player from '../../components/BackgroundAudioPlayer/Player';

// function FirstQues () {

//     const state = useSelector((state) => state);
//     // console.log('all lesson data in questions......',state.config.lang);

//     return (
//         <div>
            
//             <h1>Hello this is first slide</h1>

//         </div>
//     )
// };

const ConfigData = () => {
    const state = useSelector((state) => state);
    const sco_num = localStorage.getItem('sco_number');
    const lang = localStorage.getItem('lang');
    const exe = state.lesson.exe;

    const ques = state.lesson.lesson[0].exercises[0]

    return [sco_num, lang, exe, ques];
}

const Second = ({ response_to_a_question, moveSlide }) => {

    const sendResponse = (question_id, response_status) => {
        response_to_a_question(question_id, response_status);
        moveSlide();
    }

    const [sco_num, lang, exe, ques_con] = ConfigData();
    const ques = ques_con.questions[0];

    return (
        <>
            <div className="ea-web-app">
                <TopBar content={ques.content} />
                <div className="ea-slider">
                    <div className="ea-slider-content">
                        <div className="ea-slider-img ea-slider-img-01 ea-cursor ea-common">
                            <img src={A} alt="A" onClick={() => sendResponse(ques.id, 1)} />
                        </div>
                        <div className="ea-slider-img ea-slider-img-02 ea-cursor ea-common">
                            <img src={B} alt="B" onClick={() => sendResponse(ques.id, 0)} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="ea-mobile-app">
                <TopBar content={ques.content} />
                <div class="ea-slider">
                    <div className="ea-slider-content">
                        <div className="ea-slider-img ea-slider-img-01 ea-common">
                            <img src={A} alt="A" onClick={() => sendResponse(ques.id, 1)} />
                        </div>
                        <div className="ea-slider-img ea-slider-img-02 ea-common">
                            <img src={B} alt="B" onClick={() => sendResponse(ques.id, 0)} />
                        </div>
                    </div>
                </div>
            </div>

        </>
        // <div className="container-fluid">
        //     <TopBar content={ques.content} />    

        //     <div className="row top-margin">
        //         <div className="col-md-1"></div>
        //         {ques.responses.map((res, index) => 
        //             <div key={index} className="col-md-5 col-margin-top-sm">
        //                 <div className="text-holder-s1" onClick={() => sendResponse(ques.id, res.correct)}>
        //                     {res._data.map((content, index) =>
        //                         <h1 key={index}>{content.content}</h1>
        //                     )}
        //                 </div>
        //             </div>
        //         )}
        //         <div className="col-md-1"></div>
        //     </div>
        // </div>
    )
}

const Third = ({ response_to_a_question, moveSlide }) => {

    const sendResponse = (question_id, response_status) => {
        response_to_a_question(question_id, response_status);
        moveSlide();
    }

    const [sco_num, lang, exe, ques_con] = ConfigData();
    const ques = ques_con.questions[1];

    return (
        <>
            <div className="ea-web-app">
                <TopBar content={ques.content} />
                <div className="ea-slider">
                    <div className="ea-slider-content">
                        <div className="ea-slider-img ea-slider-img-01 ea-cursor ea-common">
                            <img src={Cow} alt="Cow" onClick={() => sendResponse(ques.id, 1)} />
                        </div>
                        <div className="ea-slider-img ea-slider-img-02 ea-cursor ea-common">
                            <img src={Rabit} alt="Rabit" onClick={() => sendResponse(ques.id, 0)} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="ea-mobile-app">
                <TopBar content={ques.content} />
                <div className="ea-slider">
                    <div className="ea-slider-content">
                        <div className="ea-slider-img ea-slider-img-01 ea-common">
                            <img src={Cow} alt="Cow" onClick={() => sendResponse(ques.id, 1)} />
                        </div>
                        <div className="ea-slider-img ea-slider-img-02 ea-common">
                            <img src={Rabit} alt="Rabit" onClick={() => sendResponse(ques.id, 0)} />
                        </div>
                    </div>
                </div>
            </div>
        </>
        
        // <div className="container-fluid">
        //     <TopBar content={ques.content} /> 

        //     <div className="row top-margin">
        //         <div className="col-md-1"></div>
        //         {ques.responses.map((res, index) => 
        //             <div key={index} className="col-md-5 col-margin-top-sm">
        //                 <div className="img-holder-s1" onClick={() => sendResponse(ques.id, res.correct)}>
        //                     {res._data.map((content, index) =>
        //                         <img className="mx-auto d-block" src={`/scos/${sco_num}/media/images/${content.content}`} alt={content.content} />
        //                     )}
        //                 </div>
        //             </div>
        //         )}
        //         <div className="col-md-1"></div>
        //     </div>
        // </div>
    )
};

const Fifth = ({ response_to_a_question, moveSlide }) => {

    const sendResponse = (question_id, response_status) => {
        response_to_a_question(question_id, response_status);
        moveSlide();
    }
    
    const [sco_num, lang, exe, ques_con] = ConfigData();
    const ques = ques_con.questions[2];

    return (
        <>
        <div className="ea-app">
            <TopBar content={ques.content} /> 
            <div className="ea-slider">
                <div className="ea-slider-content">
                    <div className="ea-slider-img ea-slider-img-01 ea-cursor ea-common">
                        <img src={Rabit} alt="Cow" />
                    </div>
                    <div className="ea-multi-images">
                        <div className="ea-img-01 ea-cursor ea-common">
                            <img src={Bunny} alt="Bunny" onClick={() => sendResponse(ques.id, 1)} />
                        </div>
                        <div className="ea-img-02 ea-cursor ea-common">
                            <img src={Crocodile} alt="Crocodile" onClick={() => sendResponse(ques.id, 0)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="ea-mobile-app">
            <TopBar content={ques.content} /> 
            <div className="ea-slider">
                <div className="ea-slider-content">
                    <div className="ea-slider-img ea-slider-img-01 ea-cursor ea-common">
                        <img src={Rabit} alt="Cow" />
                    </div>
                    <div className="ea-multi-images">
                        <div className="ea-img-01 ea-cursor ea-common">
                            <img src={Bunny} alt="Bunny" onClick={() => sendResponse(ques.id, 1)} />
                        </div>
                        <div className="ea-img-02 ea-cursor ea-common">
                            <img src={Crocodile} alt="Crocodile" onClick={() => sendResponse(ques.id, 0)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>


        // <div className="container-fluid">
        //     <TopBar content={ques.content} /> 

        //     <div className="row top-margin">
        //         <div className="col-md-1"></div>
        //         <div className="col-md-5">
        //             <div className="img-holder-s2">
        //                 <img src={Bunny} className="mx-auto d-block" alt="cow" />
        //             </div>
        //         </div>
        //         <div className="col-md-5">
        //             {ques.responses.map((res) =>
        //                 <div>
        //                     {res._data.map((content) =>
        //                         <div className="res-text-holder-s3">
        //                             <h1>{content.content}</h1>
        //                         </div>
        //                     )}
        //                 </div>
        //             )}
        //         </div>
        //         <div className="col-md-1"></div>
        //     </div>

        // </div>
    )
};

const Sixth = () => {

    const [sco_num, lang, exe, ques_con] = ConfigData();
    const ques = ques_con.questions[3];

    return (
        <div className="ea-app">
            <TopBar content={ques.content} />
            <div className="ea-slider">
                <div className="ea-slider-content">
                    <div className="ea-images-sound-left">
                        <div className="ea-img-sound-left-01 ea-cursor ea-common">
                            <Player url={'test_audio_file.mp3'} flag={'question_audio'} />
                        </div>
                        <div className="ea-img-sound-left-02 ea-cursor ea-common">
                            <img src={Play_A} alt="Play A" />
                        </div>
                    </div>
                    <div className="ea-images-sound-right">
                        <div className="ea-img-sound-right-01 ea-cursor ea-common">
                            <Player url={'test_audio_file.mp3'} flag={'question_audio'} />
                        </div>
                        <div className="ea-img-sound-right-02 ea-cursor ea-common">
                            <img src={Play_B} alt="Play B" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className="container-fluid">
        //     <TopBar content={ques.content} /> 

        //     <div className="row top-margin">
        //         <div className="col-md-1"></div>
        //         {ques.responses.map((res) =>
        //             <div className="col-md-5">
        //                 <div className="row">
        //                     {res._data.map((content) =>
        //                         <>
        //                             <div className="col-sm-12">
        //                                 <Player url={content.content} flag={'question_audio'} />
        //                                 {/* <img src={PlayBtn} className="mx-auto d-block" onClick={playAudio} alt="paly btn" /> */}
        //                             </div>
        //                             <div className="col-sm-12">
        //                                 <div className="res-text-holder-s3">
        //                                     <h1>{res.id == 0 ? 'A' : 'B'}</h1>
        //                                 </div>
        //                             </div>
        //                         </>
        //                     )}
        //                 </div>
        //             </div>
        //         )}
        //         <div className="col-md-1"></div>
                
        //     </div>
        // </div>
    )
};

const SeventhQues = () => {
    
    const [sco_num, lang, exe, ques_con] = ConfigData();
    const ques = ques_con.questions[4];

    useEffect(() => {
        localStorage.clear();
    }, [])

    return (
        <div className="ea-app">
            <TopBar content={ques.content} /> 
            <div className="ea-slider">
                <div className="ea-slider-content">
                    <div className="ea-slider-img ea-slider-img-01 ea-cursor ea-common">
                        <img src={TV} alt="Tv" />
                    </div>
                    <div className="ea-multi-images">
                        <div className="ea-img-01 ea-cursor ea-common">
                            <img src={Yes} alt="Yes" />
                        </div>
                        <div className="ea-img-02 ea-cursor ea-common">
                            <img src={No} alt="No" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className="container-fluid">
        //     <TopBar content={ques.content} /> 

        //     <div className="row top-margin">
        //         <div className="col-md-1"></div>
        //         <div className="col-md-5">
        //             <div className="img-holder-s2">
        //                 <img src={Bunny} className="mx-auto d-block" alt="cow" />
        //             </div>
        //         </div>
        //         <div className="col-md-5">
        //         {ques.responses.map((res) =>
        //                 <div>
        //                     {res._data.map((content) =>
        //                         <div className="res-text-holder-s3">
        //                             <h1>{content.content}</h1>
        //                         </div>
        //                     )}
        //                 </div>
        //             )}
        //         </div>
        //         <div className="col-md-1"></div>
        //     </div>
        // </div>
    )
};

// const EightQues = () => {
    
//     const [sco_num, lang, exe, ques_con] = ConfigData();
//     const ques = ques_con.questions[5];

//     return (
//         <div className="container-fluid">
//             <TopBar content={ques.content} /> 

//             <div className="row top-margin">
//                 <div className="col-md-1"></div>
//                 <div className="col-md-5">
//                     <div className="img-holder-s2">
//                         <img src={Bunny} className="mx-auto d-block" alt="cow" />
//                     </div>
//                 </div>
//                 <div className="col-md-5">
//                 {ques.responses.map((res) =>
//                         <div>
//                             {res._data.map((content) =>
//                                 <div className="res-text-holder-s3">
//                                     <h1>{content.content}</h1>
//                                 </div>
//                             )}
//                         </div>
//                     )}
//                 </div>
//                 <div className="col-md-1"></div>
//             </div>
//         </div>
//     )
// };

// const NinethQues = () => {
    
//     const [sco_num, lang, exe, ques_con] = ConfigData();
//     const ques = ques_con.questions[6];

//     return (
//         <div className="container-fluid">
//             <TopBar content={ques.content} /> 

//             <div className="row top-margin">
//                 <div className="col-md-1"></div>
//                 {ques.responses.map((res) => 
//                     <div className="col-md-5 col-margin-top-sm">
//                         <div className="img-holder-s2">
//                             {res._data.map((content) =>
//                                 <img className="mx-auto d-block" src={`/scos/${sco_num}/media/images/${content.content}`} alt={content.content} />
//                             )}
//                         </div>
//                     </div>
//                 )}
//                 <div className="col-md-1"></div>
//             </div>
//         </div>
//     )
// };

// const TenthQues = () => {
    
//     const [sco_num, lang, exe, ques_con] = ConfigData();
//     const ques = ques_con.questions[7];

//     useEffect(() => {
//         localStorage.clear();
//     }, [])

//     return (
//         <div className="container-fluid">
//             <TopBar content={ques.content} /> 

//             <div className="row top-margin">
//                 <div className="col-md-1"></div>
//                 <div className="col-md-5">
//                     <div className="img-holder-s2">
//                         <img src={Bunny} className="mx-auto d-block" alt="cow" />
//                     </div>
//                 </div>
//                 <div className="col-md-5">
//                 {ques.responses.map((res) =>
//                         <div>
//                             {res._data.map((content) =>
//                                 <div className="res-text-holder-s3">
//                                     <h1>{content.content}</h1>
//                                 </div>
//                             )}
//                         </div>
//                     )}
//                 </div>
//                 <div className="col-md-1"></div>
//             </div>
//         </div>
//     )
// };

// export default connect(null, { response_to_a_question })(Second);

// export {Second, Third, Fifth, Sixth, SeventhQues, EightQues, NinethQues, TenthQues}

export default {
    Second: connect(null, { response_to_a_question })(Second),
    Third: connect(null, { response_to_a_question })(Third),
    Fifth: connect(null, { response_to_a_question })(Fifth),
    Sixth: connect(null, null)(Sixth),
    SeventhQues: connect(null, null)(SeventhQues),
    // EightQues: connect(null, null)(EightQues),
    // NinethQues: connect(null, null)(NinethQues),
    // TenthQues: connect(null, null)(TenthQues),
}

