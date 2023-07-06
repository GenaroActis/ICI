import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function InglJr() {
    return (
        <div>
        <Carousel>
            <Carousel.Item interval={3000000} className='rounded'>
                <img
                className="d-block w-100 rounded"
                src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1688653794/ici/fristStep_ruhvrq.png"
                alt="First slide"
                />
                <Carousel.Caption className="shadow text-black p-3 mb-5 bg-white rounded carouselCaption">
                <h3>First Step</h3>
                <Link></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000} className='rounded'>
                <img
                className="d-block w-100 rounded"
                src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1688653795/ici/junior_fajdgq.png"
                alt="Second slide"
                />
                <Carousel.Caption className="shadow text-black p-3 mb-5 bg-white rounded carouselCaption">
                <h3>Junior</h3>
                <Link></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='rounded'>
                <img
                className="d-block w-100 rounded"
                src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1688653795/ici/primary_tbqnsy.png"
                alt="Third slide"
                />
                <Carousel.Caption className="shadow text-black p-3 mb-5 bg-white rounded carouselCaption">
                <h3>Primary</h3>
                <Link></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='rounded'>
                <img
                className="d-block w-100 rounded"
                src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1688653794/ici/preLiminary_f0bxzc.png"
                alt="Fourth slide"
                />
                <Carousel.Caption className="shadow text-black p-3 mb-5 bg-white rounded carouselCaption">
                <h3>PreLiminary</h3>
                <Link></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='rounded'>
                <img
                className="d-block w-100 rounded"
                src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1688653794/ici/Elementary_izinan.png"
                alt="Fifth slide"
                />
                <Carousel.Caption className="shadow text-black p-3 mb-5 bg-white rounded carouselCaption">
                <h3>Elementary</h3>
                <Link></Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    )
}

export default InglJr