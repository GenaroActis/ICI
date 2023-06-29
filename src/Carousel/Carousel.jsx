import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const CarouselIndex = () =>{
    return(
        <>
        <Carousel>
            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1688044624/ici/1_wdn6jz.png"
                alt="First slide"
                />
                <Carousel.Caption className="shadow text-black p-3 mb-5 bg-white rounded carouselCaption">
                <h3>Examenes Anglia</h3>
                <p>Anglia Examinations es una entidad examinadora internacional que actualmente opera en más de 50 países en todo el mundo.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1688045435/ici/2_umdimj.png"
                alt="Second slide"
                />
                <Carousel.Caption className="shadow text-black p-3 mb-5 bg-white rounded carouselCaption">
                <h3>Viajes Internacionales</h3>
                <p>Viajes educativos a Inglaterra.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1688044625/ici/3_lda4u1.png"
                alt="Third slide"
                />
                <Carousel.Caption className="shadow text-black p-3 mb-5 bg-white rounded carouselCaption">
                <h3>Clases Personalizadas</h3>
                <p>Para todas las edades.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    )
};
export default CarouselIndex