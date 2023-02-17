import React from "react";
import Header from "../../layouts/fronted/header/Header";
import Banniere from "./baniere/Banniere";
import image01 from '../../assets/images/image01.jpg'
import './Home.css'

export default function Home() {
    return (
        <div>
            <Header/>
            <Banniere/>
            <section className="section" id="section-enseignement">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 ">
                            <img className="image-enseign" src={image01} alt="enseignement" />
                            <h1 className="title_enseign">Enseignements primaires</h1>
                            <p className="info-enseign">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ad ducimus quis architecto at et quisquam temporibus nam iste minus, nulla voluptas itaque accusantium sed quidem dicta modi ipsum eligendi.
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-6 ">
                           <img className="image-enseign"  src={image01} alt="enseignement" />
                            <h1 className="title_enseign">Enseignements primaires</h1>
                            <p className="info-enseign">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ad ducimus quis architecto at et quisquam temporibus nam iste minus, nulla voluptas itaque accusantium sed quidem dicta modi ipsum eligendi.
                            </p>
                        </div>
                        <div className="col-md-4 ">
                            <img className="image-enseign"  src={image01} alt="enseignement" />
                            <h1 className="title_enseign">Enseignements primaires</h1>
                            <p className="info-enseign">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ad ducimus quis architecto at et quisquam temporibus nam iste minus, nulla voluptas itaque accusantium sed quidem dicta modi ipsum eligendi.
                            </p>
                        </div>
                    </div>
                </div>
            </section> 
            <h1></h1>
            <section className="section" id="card-section">
            </section>                                                            
        </div>
    )
}