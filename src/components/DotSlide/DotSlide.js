import React from 'react'
import {FirstQues, Second, Third, Fifth, Sixth} from "../../exercises/EXO/Questions";
import './style.css';

function DotSlide({currentIndex, moveSlide}) {
    let sliderArray = [<FirstQues />, <Second />, <Third />, <Fifth />, <Sixth />];
    console.log(currentIndex);

    return (
        <div className="dots-container">
            {sliderArray.map((item, index) => {
                return <div 
                            className={currentIndex === index ? "dot active" : "dot"}
                            key={index}
                        >
                                {index + 1}
                        </div>
            })}
        </div>
    )
}

export default DotSlide;
