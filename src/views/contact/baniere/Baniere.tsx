import React from "react";
import './Banniere.css'
import image from "../../../assets/images/image01.jpg"

export default function Banniere() {
    return (
        <>
                <div className="main-banner" id="top">
                    <div id="bg-video"></div>
                    <div className="video-overlay header-text" >
                        {/* <div className="caption">
                            <h6>work harder, get stronger</h6>
                            <h2>easy with our <em>gym</em></h2>
                            <div className="main-button scroll-to-section">
                                <a href="#features">Become a member</a>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div>
                    <div className="image-left">
                        <img src={image} alt="image-left" width={400} height={552} />
                    </div>
                </div>
        </>
    )
}