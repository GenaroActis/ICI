import * as React from 'react';
import Button from './Button';


const Header = () => {
    return (
        <>
        <div id='header'>
            <div>
                <img className='imgLogo' src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1679494667/ici/logoweb_iq6je1.png" alt="" />
            </div>
            <Button/>
        </div>
        </>
    )
}

export default Header