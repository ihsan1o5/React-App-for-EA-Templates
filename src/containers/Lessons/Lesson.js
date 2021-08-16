import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { load_config } from "../../redux/actions/config";
import { load_slider } from "../../redux/actions/slider";
import "./Lesson.css";
import Reward from '../../assets/images/reward.png';
import Star from '../../assets/images/star.png';
import { MdLock } from 'react-icons/md';

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

    const onClick = () => {
        load_slider();
        history.push('/slider');
    }

    return (
        <div className="page-bg">
            <div className="row headr">
                <div className="col-md-4 header-item">
                    <div className="level-holder">
                        <h1>Levels</h1>
                    </div>
                </div>
                <div className="col-md-4 header-item">
                    <div className="lesson-holder">
                        <h1>Lessons</h1>
                    </div>
                </div>
                <div className="col-md-4 header-item">
                    <div className="units-holder">
                        <h1>Units</h1>
                    </div>
                </div>
            </div>

            <div className="row content">
                <div className="col-md-2 content-item">
                    {/* <h1>Button1</h1> */}
                </div>
                <div className="col-md-2 content-item">
                    <div className="bg-clickable btn-active" onClick={onClick}>
                        <div className="level-btn">
                            <img src={Reward} />
                        </div>
                    </div>
                </div>
                <div className="col-md-2 content-item content-item-bottom">
                    {/* <h1>Button3</h1> */}
                </div>
                <div className="col-md-2 content-item">
                    <div className="bg-clickable">
                        <div className="level-btn">
                            <img src={Reward} />
                            <div className="lock">
                                <MdLock className="lock-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 content-item">
                    {/* <h1>Button5</h1> */}
                </div>
                <div className="col-md-2 content-item">
                    <div className="bg-clickable">
                        <div className="level-btn">
                            <img src={Reward} />
                            <div className="lock">
                                <MdLock className="lock-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row content">
                <div className="col-md-2 content-item">
                    <div className="bg-clickable">
                        <div className="level-btn">
                            <img src={Reward} />
                        </div>
                    </div>
                    <div className="ratting">
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                    </div>
                </div>
                <div className="col-md-2 content-item">
                    {/* <h1>Button2</h1> */}
                </div>
                <div className="col-md-2 content-item content-item-bottom">
                    <div className="bg-clickable">
                        <div className="level-btn">
                            <img src={Reward} />
                            <div className="lock">
                                <MdLock className="lock-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 content-item">
                    {/* <h1>Button4</h1> */}
                </div>
                <div className="col-md-2 content-item">
                    <div className="bg-clickable">
                        <div className="level-btn">
                            <img src={Reward} />
                            <div className="lock">
                                <MdLock className="lock-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 content-item">
                    {/* <h1>Button6</h1> */}
                </div>
            </div>

            <div className="row content">
                <div className="col-md-2 content-item">
                    {/* <h1>Button1</h1> */}
                </div>
                <div className="col-md-2 content-item">
                    <div className="bg-clickable">
                        <div className="level-btn">
                            <img src={Reward} />
                            <div className="lock">
                                <MdLock className="lock-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 content-item content-item-bottom">
                    {/* <h1>Button3</h1> */}
                </div>
                <div className="col-md-2 content-item">
                    <div className="bg-clickable">
                        <div className="level-btn">
                            <img src={Reward} />
                            <div className="lock">
                                <MdLock className="lock-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 content-item">
                    {/* <h1>Button5</h1> */}
                </div>
                <div className="col-md-2 content-item">
                    <div className="bg-clickable">
                        <div className="level-btn">
                            <img src={Reward} />
                            <div className="lock">
                                <MdLock className="lock-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default connect(null, {load_config, load_slider})(Lesson)
