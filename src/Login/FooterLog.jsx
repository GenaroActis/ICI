import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import {Context} from "../Context/Context";
import {faBars} from '@fortawesome/free-solid-svg-icons'

const FooterLog = () => {
    const upMenu = () =>{
        window.scrollTo(0, 0);
    }
    const upMap = () =>{
        window.scrollTo(0, 500);
    }
    let {sideBarOpen} = useContext(Context)
    const currentYear = new Date().getFullYear();
    return (
        <>
        <div className='d-flex flex-column align-items-center footer'>
            <div className='col-5 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-2 imgFooterDiv'>
                <img src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1679510940/ici/logoicipng_zbsdom.png" className='img-fluid imgFooter' alt="" />
            </div>
            <div className="footer-info d-flex flex-column text-center align-items-center mt-5">
                <div className='col-9 col-sm-8 col-lg-5 col-xxl-4 mt-5'>
                    <img className='img-fluid' src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1680612964/ici/insti_v0n4zi.png" alt="" />
                </div>
                <Link onClick={upMap} to={'/ici/contacto'}>
                    <h4 className='direc fw-bold '>Dirección: Independencia 25, San Pedro</h4>
                </Link>
            </div>
            <div className="container d-none flex-column d-md-flex pb-2">
                <p className="text-center text-body-secondary fw-bold">© {currentYear} Todos los derechos reservados</p>
            </div>
        </div>
        </>
    )
}

export default FooterLog