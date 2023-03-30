import * as React from 'react';
import Button from './Button';


const Header = () => {
    return (
        <>
        <a href="https://www.anglia.org/" target="_blank"><img id='img-anglia' src="https://angliaexams.es/wp-content/uploads/2021/12/logo-anglia3.svg" alt="" /></a>
        <div id='header' className='d-flex flex-column align-items-center'>
            <div className='col-7 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-2'>
                <img className='img-fluid' src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1679494667/ici/logoweb_iq6je1.png" alt="" />
            </div>
            <Button/>
        </div>
        </>
    )
}

export default Header