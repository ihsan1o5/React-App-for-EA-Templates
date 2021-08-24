import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { load_config } from "../../redux/actions/config";
import { load_slider } from "../../redux/actions/slider";
// import "./Lesson.css";

import BG from '../../assets/images/bg.png';
import Leveles from '../../assets/images/levels.svg';
import Lessons from '../../assets/images/lessons.svg';
import Units from '../../assets/images/units.svg';

import Reward1 from '../../assets/images/level-1.svg';
import Reward2 from '../../assets/images/level-2.svg';
import Reward3_Lock from '../../assets/images/locked-level.svg';

import Path1_Active from '../../assets/images/level-1-path-active.svg';
import Path2 from '../../assets/images/level-2-path-normal.svg';
import Path3 from '../../assets/images/level-3-path-normal.svg';
import Path4 from '../../assets/images/level-4-path-normal.svg';
import Path5 from '../../assets/images/level-5-path-normal.svg';
import Path6 from '../../assets/images/level-6-path-normal.svg';
import Path7 from '../../assets/images/level-7-path-normal.svg';
import Path8 from '../../assets/images/level-8-path-normal.svg';
import Path9 from '../../assets/images/level-9-path-normal.svg';

// import Reward from '../../assets/images/reward.png';
// import Star from '../../assets/images/star.png';
// import LockIcon from '../../assets/images/lock.png';


const Lesson = ({ load_config, load_slider, match }) => {
    const state = useSelector((state) => state);
    console.log(state.config.lesson);

    useEffect(() => {
        
        const user_id = match.params.user_id;
        const course_id = match.params.course_id;
        const launch_config = match.params.launch_config;

        load_config(user_id, course_id, launch_config);
    }, []);

    const history = useHistory();

    const onClick = (exe) => {
        load_slider(exe);
        history.push('/slider');
    }

    return ( 

    <div className="ea-app">
      
        <img className="ea-bg" src={BG} alt="English Academy" />

        <div className="ea-app-levels ea-common">
            <img src={Leveles} alt="Levels" />
        </div>
        <div className="ea-app-lessons ea-common">
            <img src={Lessons} alt="Lessons" />
        </div>
        <div className="ea-app-units ea-common">
            <img src={Units} alt="Units" />
        </div>

        <div className="ea-level-map">

            <div className="ea-level-lock ea-level-01 ea-common ea-z-index">
            <img src={Reward1} alt="Level 01" />
            </div>
            <div className="ea-path ea-path-img-01 ea-common">
            <img src={Path1_Active} alt="Level Path 01" />
            </div>

            <div className="ea-level-lock ea-level-02 ea-common ea-z-index">
            <img src={Reward2} alt="Level 02" onClick={() => onClick('EXO')} />
            </div>
            <div className="ea-path ea-path-img-02 ea-common">
            <img src={Path2} alt="Level Path 02" />
            </div>

            <div className="ea-level-lock ea-level-03 ea-common ea-z-index">
            <img src={Reward3_Lock} alt="Level 03" />
            </div>
            <div className="ea-path ea-path-img-03 ea-common">
            <img src={Path3} alt="Level Path 03" />
            </div>

            <div className="ea-level-lock ea-level-04 ea-common ea-z-index">
            <img src={Reward3_Lock} alt="Level 04" />
            </div>
            <div className="ea-path ea-path-img-04 ea-common">
            <img src={Path4} alt="Level Path 04" />
            </div>

            <div className="ea-level-lock ea-level-05 ea-common ea-z-index">
            <img src={Reward3_Lock} alt="Level 05" />
            </div>
            <div className="ea-path ea-path-img-05 ea-common">
            <img src={Path5} alt="Level Path 05" />
            </div>

            <div className="ea-level-lock ea-level-06 ea-common ea-z-index">
            <img src={Reward3_Lock} alt="Level 06" />
            </div>
            <div className="ea-path ea-path-img-06 ea-common">
            <img src={Path6} alt="Level Path 06" />
            </div>

            <div className="ea-level-lock ea-level-07 ea-common ea-z-index">
            <img src={Reward3_Lock} alt="Level 07" />
            </div>
            <div className="ea-path ea-path-img-07 ea-common">
            <img src={Path7} alt="Level Path 07" />
            </div>

            <div className="ea-level-lock ea-level-08 ea-common ea-z-index">
            <img src={Reward3_Lock} alt="Level 08" />
            </div>
            <div className="ea-path ea-path-img-08 ea-common">
            <img src={Path8} alt="Level Path 08" />
            </div>

            <div className="ea-level-lock ea-level-09 ea-common ea-z-index">
            <img src={Reward3_Lock} alt="Level 09" />
            </div>
            <div className="ea-path ea-path-img-09 ea-common">
            <img src={Path9} alt="Level Path 09" />
            </div>

        </div>

    </div>
    
        // <div className="page-bg container-fluid">
        //     <div className="row">
        //         <div className="col-md-4 mt-3">
        //             <div className="level-holder">
        //                 <h1>Levels</h1>
        //             </div>
        //         </div>
        //         <div className="col-md-4 mt-3">
        //             <div className="lesson-holder">
        //                 <h1>Lessons</h1>
        //             </div>
        //         </div>
        //         <div className="col-md-4 mt-3">
        //             <div className="units-holder">
        //                 <h1>Units</h1>
        //             </div>
        //         </div>
        //     </div>

        //     <div className="row content content-sm-rw1">
        //         <div className="col-md-2">
        //             {/* <h1>Button1</h1> */}
        //         </div>
        //         <div className="col-md-2">
        //             <div className="bg-clickable btn-active" onClick={() => onClick('EXO')}>
        //                 <div className="level-btn">
        //                     <img className="mx-auto d-block" src={Reward} />
        //                 </div>
        //                 <svg viewBox="0 0 10 10" class="svg1">
        //                     <path d="M2,2 Q8,2 8,8" />
        //                 </svg>
        //             </div>
        //         </div>
        //         <div className="col-md-2 content-item-bottom">
        //             {/* <h1>Button3</h1> */}
        //         </div>
        //         <div className="col-md-2">
        //             <div className="bg-clickable">
        //                 <div className="level-btn">
        //                     <img className="mx-auto d-block" src={Reward} />
        //                     <div className="lock">
        //                         <img className="mx-auto d-block" src={LockIcon} />
        //                     </div>
        //                 </div>
        //             </div>
        //             <svg viewBox="0 0 10 10" class="svg1-2">
        //                 <path d="M2,2 Q8,2 8,8" />
        //             </svg>
        //         </div>
        //         <div className="col-md-2">
        //             {/* <h1>Button5</h1> */}
        //         </div>
        //         <div className="col-md-2">
        //             <div className="bg-clickable">
        //                 <div className="level-btn">
        //                     <img className="mx-auto d-block" src={Reward} />
        //                     <div className="lock">
        //                         <img className="mx-auto d-block" src={LockIcon} />
        //                     </div>
        //                 </div>
        //             </div>
        //             <svg viewBox="0 0 10 10" class="svg1-2">
        //                 <path d="M2,2 Q8,2 8,8" />
        //             </svg>
        //         </div>
        //     </div>

        //     <div className="row content">
        //         <div className="col-md-2">
        //             <div className="bg-clickable">
        //                 <div className="level-btn">
        //                     <img className="mx-auto d-block" src={Reward} />
        //                 </div>
        //             </div>
        //             <div className="ratting">
        //                 <img src={Star} />
        //                 <img src={Star} />
        //                 <img src={Star} />
        //             </div>
        //         </div>
        //         <div className="col-md-2">
        //             {/* <h1>Button2</h1> */}
        //         </div>
        //         <div className="col-md-2 content-item-bottom">
        //             <div className="bg-clickable">
        //                 <div className="level-btn">
        //                     <img className="mx-auto d-block" src={Reward} />
        //                     <div className="lock">
        //                         <img className="mx-auto d-block" src={LockIcon} />
        //                     </div>
        //                 </div>
        //             </div>
        //             <svg viewBox="0 0 10 10" class="svg3">
        //                 <path d="M1,2 Q8,2 8,10" />
        //             </svg>
        //         </div>
        //         <div className="col-md-2">
        //             {/* <h1>Button4</h1> */}
        //         </div>
        //         <div className="col-md-2">
        //             <div className="bg-clickable">
        //                 <div className="level-btn">
        //                     <img className="mx-auto d-block" src={Reward} />
        //                     <div className="lock">
        //                         <img className="mx-auto d-block" src={LockIcon} />
        //                     </div>
        //                 </div>
        //             </div>
        //             <svg viewBox="0 0 10 10" class="svg3">
        //                 <path d="M1,2 Q8,2 8,10" />
        //             </svg>
        //         </div>
        //         <div className="col-md-2">
        //             {/* <h1>Button6</h1> */}
        //         </div>
        //     </div>

        //     <div className="row content content-sm">
        //         <div className="col-md-2">
        //             {/* <h1>Button1</h1> */}
        //         </div>
        //         <div className="col-md-2">
        //             <svg viewBox="0 0 10 10" class="svg2">
        //                 <path d="M1,4 Q5,2 6,5 T12,8" />
        //             </svg>
        //             <div className="bg-clickable">
        //                 <div className="level-btn">
        //                     <img className="mx-auto d-block" src={Reward} />
        //                     <div className="lock">
        //                         <img className="mx-auto d-block" src={LockIcon} />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="col-md-2 content-item-bottom">
        //             {/* <h1>Button3</h1> */}
        //         </div>
        //         <div className="col-md-2">
        //             <svg viewBox="0 0 10 10" class="svg2-2">
        //                 <path d="M1,4 Q5,2 6,5 T12,8" />
        //             </svg>
        //             <div className="bg-clickable">
        //                 <div className="level-btn">
        //                     <img className="mx-auto d-block" src={Reward} />
        //                     <div className="lock">
        //                         <img className="mx-auto d-block" src={LockIcon} />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="col-md-2">
        //             {/* <h1>Button5</h1> */}
        //         </div>
        //         <div className="col-md-2">
        //             <svg viewBox="0 0 10 10" class="svg2-2">
        //                 <path d="M1,4 Q5,2 6,5 T12,8" />
        //             </svg>
        //             <div className="bg-clickable">
        //                 <div className="level-btn">
        //                     <img className="mx-auto d-block" src={Reward} />
        //                     <div className="lock">
        //                         <img className="mx-auto d-block" src={LockIcon} />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </div>
    
    )
}

export default connect(null, {load_config, load_slider})(Lesson)
