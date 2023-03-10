import React from "react";
import Header from "../../../layouts/fronted/header/Header";
import Banniere from "./baniere/Banniere";
import image01 from '../../../assets/images/image01.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Home.css'
import BasicCard from "./card/Card";
import Footer from "../../../layouts/fronted/footer/Footer"

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      >
        NEXT
      </div>
    );
}
  
  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      >
        BACK
      </div>
    );
}

export default function Home(props: any) {

    const slider = React.useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1424,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true,
                },
            },

            {
                breakpoint: 1124,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
                },
            },
            {
                breakpoint: 970,
                settings: {
                slidesToShow: 2.7,
                slidesToScroll: 2.5,
                initialSlide: 2.7,
                },
            },{
                breakpoint: 891,
                settings: {
                slidesToShow: 2.5,
                slidesToScroll: 2.5,
                initialSlide: 2,
                },
            },{
                breakpoint: 830,
                settings: {
                slidesToShow: 2.4,
                slidesToScroll: 2.4,
                initialSlide: 2.4,
                },
            },
            {
                breakpoint: 793,
                settings: {
                slidesToShow: 2.1,
                slidesToScroll: 2.1,
                initialSlide: 2.1,
                },
            },
            {
                breakpoint: 700,
                settings: {
                slidesToShow: 1.75,
                slidesToScroll: 1.75,
                initialSlide: 1.75,
                },
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1.55,
                slidesToScroll: 1.55,
                initialSlide: 1.55,
                },
            },{
                breakpoint: 544,
                settings: {
                slidesToShow: 1.4,
                slidesToScroll: 1.4,
                initialSlide: 1.4,
                },
            },{
                breakpoint: 500,
                settings: {
                slidesToShow: 1.2,
                slidesToScroll: 1.2,
                initialSlide: 1.2,
                },
            },{
                breakpoint: 452,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                },
            },
        ],

        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }
    return (
        <div>
            <Header/>
            <Banniere/>
            <section className="section" id="section-enseignement">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 primaire">
                            <img className="image-enseign" src={image01} alt="enseignement" />
                            <h1 className="title_enseign">Enseignements primaires</h1>
                            <p className="info-enseign">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ad ducimus quis architecto at et quisquam temporibus nam iste minus, nulla voluptas itaque accusantium sed quidem dicta modi ipsum eligendi.
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-6 secondaire">
                           <img className="image-enseign"  src={image01} alt="enseignement" />
                            <h1 className="title_enseign">Enseignements secondaires</h1>
                            <p className="info-enseign">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ad ducimus quis architecto at et quisquam temporibus nam iste minus, nulla voluptas itaque accusantium sed quidem dicta modi ipsum eligendi.
                            </p>
                        </div>
                        <div className="col-md-4 universitaire">
                            <img className="image-enseign"  src={image01} alt="enseignement" />
                            <h1 className="title_enseign">Enseignements universitaires</h1>
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
                    <div className="row" style={{margin: "0 auto"}}>
                        <div className="col-md-12">     
                            <Slider ref={slider}  {...settings}>
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
                                <div>
                                <BasicCard/>
                                </div>
                                <div>
                                <BasicCard/>
                                </div>
                                <div>
                                <BasicCard/>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>      
            <section className="section matiere_technique mb-4" id="card-section2">
                <h1 className="title-technique mb-4">Matière du technique</h1>
                <div className="container-fluid">
                    <div className="row" style={{margin: "0 auto"}}>
                        <div className="col-md-12 ">
                        <Slider {...settings}>
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
                            <div>
                               <BasicCard/>
                            </div>
                            <div>
                              <BasicCard/>
                            </div>
                            <div>
                              <BasicCard/>
                            </div>
                        </Slider>
                        </div>
                    </div>
                </div>
            </section> 
            <Footer/>                                                           
        </div>
    )
}