import React, {useState, useEffect} from "react";
import { connect, useSelector } from 'react-redux';
import Components from "../../exercises/EXO/Questions";
// import "./Slider.css";
import BtnSlider from "../../components/BtnSlide/BtnSlider";
import { keep_time_slots } from "../../redux/actions/slider";

const Slider = ({keep_time_slots}) => {

    const [current, setCurrent] = useState(0);

    const state = useSelector((state) => state);
    const elapsed_questions = state.lesson.elapsed_questions;

    console.log('elapsed questions are...', elapsed_questions);

    useEffect(() => {
        if (elapsed_questions > 0) {
            setCurrent(elapsed_questions + 1);
        }

        window.addEventListener('beforeunload', alertUser);
        window.addEventListener('unload', handleTabClosing);

        return () => {
            window.addEventListener('beforeunload', alertUser);
            window.addEventListener('unload', handleTabClosing);
        }

    }, [])

    const handleTabClosing = () => {
        keep_time_slots();
    }

    const alertUser = (e) => {
        e.preventDefault();
        console.log('user alert');
        return e.returnValue = "are you sure?"
    }
    
    const nextSlide = () => {
        if (current < sliderArray.length - 1) {
            setCurrent(current + 1);
        }
    };

    const prevSlide = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    };
    // <Components.EightQues />, <Components.NinethQues />, <Components.TenthQues />
    let sliderArray = [<Components.Second moveSlide={nextSlide} />, <Components.Third moveSlide={nextSlide} />, <Components.Fifth moveSlide={nextSlide} />, <Components.Sixth />, <Components.SeventhQues />];
    const length = sliderArray.length;

    if (!Array.isArray(sliderArray) || sliderArray.length <= 0) {
        return null;
    }

    return (
        <div className="App">
            <div className="slider">
                {sliderArray.map((slide, index) => {
                    return (
                        <div className={index === current ? 'sliderInner active' : 'sliderInner'} key={index}>
                            {index === current && (
                                <span>{slide}</span>
                            )}
                        </div>
                    )
                })}
                
                <BtnSlider moveSlide={nextSlide} direction={'next'} />
                <BtnSlider moveSlide={prevSlide} direction={'prev'} />
                {/* <DotSlide currentIndex={current} /> */}
            </div>
        </div>
    )
    };

export default connect(null, {keep_time_slots})(Slider);
