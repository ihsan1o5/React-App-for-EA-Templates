import React from 'react'
import { useSelector } from "react-redux";


function FirstQues () {

    const state = useSelector((state) => state);
    console.log(state.config.lesson);

    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
};

function Second () {
    return (
        <div>
            <h1>First question</h1>
        </div>
    )
}

const Third = () => {
    return (
        <div>
            <h1>Second question</h1>
        </div>
    )
};

const Fifth = () => {
    return (
        <div>
            <h1>Third question</h1>
        </div>
    )
};

const Sixth = () => {
    return (
        <div>
            <h1>Fourth question</h1>
        </div>
    )
};

export {Second, FirstQues, Third, Fifth, Sixth};

