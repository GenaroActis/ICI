import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'

const CarouselIndex = () =>{
    return(
        <>
        <Carousel className="carouselIndex">
            <Carousel.Item interval={3000}>
                <Link to={'/ici/examenes'}>
                    <img
                    className="imgIndexCarousel d-block w-100"
                    src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1700075327/ici/1_wfcem2.png"
                    alt="First slide"
                    />
                    <Carousel.Caption className="shadow text-black p-3 mb-5 bg-white rounded carouselCaption">
                    <h3>Examenes Anglia</h3>
                    <p>Anglia Examinations es una entidad examinadora internacional que actualmente opera en más de 50 países en todo el mundo.</p>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <Link to={'/ici/viajes'}>
                    <img
                    className="imgIndexCarousel d-block w-100"
                    src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1700075327/ici/2_vuqnyy.png"
                    alt="Second slide"
                    />
                    <Carousel.Caption className="shadow text-black p-3 mb-5 bg-white rounded carouselCaption">
                    <h3>Viajes Internacionales</h3>
                    <p>Viajes educativos a Inglaterra.</p>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>
            <Carousel.Item>
                <Link to={'/ici/cursos'}>
                    <img
                    className="imgIndexCarousel d-block w-100"
                    src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1700075326/ici/3_fvmnch.png"
                    alt="Third slide"
                    />
                    <Carousel.Caption className="shadow text-black p-3 mb-5 bg-white rounded carouselCaption">
                    <h3>Cursos Personalizados</h3>
                    <p>Para todas las edades.</p>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>
        </Carousel>
        </>
    )
};
export default CarouselIndex