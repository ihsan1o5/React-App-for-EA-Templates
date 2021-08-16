import React from 'react'
import BackBtn from "../../assets/images/back_button.png";
import BackBtnSm from "../../assets/images/back-button-sm.png";
import NextBtn from "../../assets/images/next_button.png";
import NextBtnSm from "../../assets/images/next-button-sm.png";
import './style.css';

const BtnSlider = ({direction, moveSlide}) => {
    return (
        <div>
            <img
                onClick={moveSlide}
                className={direction === 'next' ? 'btn-slide btn-slide-lg next' : 'btn-slide btn-slide-lg prev'}
                src={direction === 'next' ? NextBtn : BackBtn}
                alt="btn imageS"

            />

            <img
                onClick={moveSlide}
                className={direction === 'next' ? 'btn-slide btn-slide-sm next' : 'btn-slide btn-slide-sm prev'}
                src={direction === 'next' ? NextBtnSm : BackBtnSm}
                alt="btn imageS"
            />
        </div>
    )
};

export default BtnSlider;
