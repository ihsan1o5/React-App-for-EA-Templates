import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import {FirstQues, Second, Third, Fifth, Sixth, SeventhQues, EightQues, NinethQues, TenthQues} from "../../exercises/EXO/Questions";
import "./Slider.css";
import BtnSlider from "../../components/BtnSlide/BtnSlider";

const Slider = () => {

    const [current, setCurrent] = useState(0);
    let sliderArray = [<FirstQues />, <Second />, <Third />, <Fifth />, <Sixth />, <SeventhQues />, <EightQues />, <NinethQues />, <TenthQues />];
    const length = sliderArray.length;
    
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
            {/* {Lesson.map((exe) => <div key={exe.id}>
                <h1>{ exe.title }</h1>
                    {exe.exercises.map((ex) =>
                        <div>
                        {ex.questions.map((ques) =>
                            <div>
                            {ques._data.map((data) =>
                                <div>

                                    {data.contents.map((cnt) =>
                                        <div>
                                            <h1>
                                                {cnt.content}
                                            </h1>
                                        </div>
                                    )}

                                </div>
                            )}    
                        </div>
                        )}
                        </div>
                          
                    )}
            </div> )} */}
        </div>
    )
    };

export default connect(null, null)(Slider);
