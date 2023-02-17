import React from "react";
import './Banniere.css'

export default function Banniere() {
    return (
        <div className="main-banner" id="top">
            <video autoPlay muted loop id="bg-video">
                <source src="https://themewagon.github.io/training-studio/assets/images/gym-video.mp4" type="video/mp4" />
            </video>

            <div className="video-overlay header-text">
                {/* <div className="caption">
                    <h6>work harder, get stronger</h6>
                    <h2>easy with our <em>gym</em></h2>
                    <div className="main-button scroll-to-section">
                        <a href="#features">Become a member</a>
                    </div>
                </div> */}
            </div>
        </div>
    )
}