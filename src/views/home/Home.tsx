import React from "react";
import Header from "../../layouts/fronted/header/Header";
import Banniere from "./baniere/Banniere";
import image01 from '../../assets/images/image01.jpg'
import './Home.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BasicCard from "./card/Card";
import Footer from "../../layouts/fronted/footer/Footer"

export default function Home(props: any) {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1175 },
          items: 4,
          slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1175, min: 464 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
    };

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
            <h1 className="text-center title-matiere" style={{color: "#ed563b"}}>Filières et matiéres</h1>
            <section className="section matiere_generale mb-4" id="card-section1">
                <h1 className="title-generale mb-4">Matière du générale</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <Carousel
                            responsive={responsive}
                        >
                            <div>
                                <BasicCard/>
                            </div>
                            <div>
                                <BasicCard/>
                            </div>
                            <div>
                                <BasicCard/>
                            </div>
                            <div>
                                <BasicCard/>
                            </div>
                            <div>
                                <BasicCard/>
                            </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>      
            <section className="section matiere_technique mb-4" id="card-section2">
                <h1 className="title-technique mb-4">Matière du générale</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <Carousel
                            responsive={responsive}
                        >
                            <div>
                                <BasicCard/>
                            </div>
                            <div>
                                <BasicCard/>
                            </div>
                            <div>
                                <BasicCard/>
                            </div>
                            <div>
                                <BasicCard/>
                            </div>
                            <div>
                                <BasicCard/>
                            </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section> 
            <Footer/>                                                           
        </div>
    )
}