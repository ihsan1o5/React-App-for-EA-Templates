import React from 'react'
import BackBtn from "../../scos/75215/media/images/back.png";
import NextBtn from "../../scos/75215/media/images/next.png";
import './style.css';

const BtnSlider = ({direction, moveSlide}) => {
    return (
        <div>
            <img
                onClick={moveSlide}
                className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
                src={direction === 'next' ? NextBtn : BackBtn}
            />
        </div>
    )
};

export default BtnSlider;
