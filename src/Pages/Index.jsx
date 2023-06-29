import React from 'react'
import Accordion from '../Accordion/Accordion'
import CarouselIndex from '../Carousel/Carousel'

const Index = () => {
    return (
        <>
        <div id='index' >
            <CarouselIndex/>
            <Accordion/>
            <div className='col-14 col-sm-10 col-md-9 col-lg-6 col-xl-5 col-xxl-4'>
                <img className='img-fluid' src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1679515669/ici/flyer_eyqil6.png" alt="" />
            </div>
        </div>
        </>
    )
}

export default Index