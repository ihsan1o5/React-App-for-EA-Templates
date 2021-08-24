import React from 'react'
import './Stimuli.css';
import BG from "../../assets/images/bg.png";

const Stimuli = () => {
    return (
        <>
          <div className="ea-web-app">
            <img className="ea-bg" src={BG} alt="English Academy" />
            <div className="ea-intro">
                <div className="ea-video">
                    <iframe src="https://www.youtube.com/embed/3olM-9vcd4M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="ea-intro-text">
                    <div className="ea-text-block">
                        <p>A cow, one cow.</p>
                        <p>A cow is on a farm.</p>
                        <p>I see a cow on a farm!</p>
                    </div>
                    <div className="ea-text-block">
                        <p>A horse, one horse.</p>
                        <p>A horse is on a farm.</p>
                        <p>I see a horse on a farm!</p>
                    </div>
                    <div className="ea-text-block">
                        <p>What is on a farm?</p>
                        <p>What is on a farm?</p>
                        <p>I see a bunny on a farm!</p>
                    </div>
                    <div className="ea-text-block">
                        <p>B is for bunny, F is for farm</p>
                        <p>A bunny, one bunny.</p>
                        <p>I see a bunny on a farm!</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="ea-mobile-app">
            
        </div>  
    </>
    )
}

export default Stimuli;
