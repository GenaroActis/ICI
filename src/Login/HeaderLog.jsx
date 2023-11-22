import React, { useContext, useEffect, useState } from 'react';
import {Context} from "../Context/Context";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faPenToSquare, faHouse, faAddressCard, faPlane, faFileSignature, faGraduationCap, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown';

const HeaderLog = () => {
    let {sideBarOpen} = useContext(Context)
    const [showCard, setShowCard] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
            setShowCard(!isBottom);
            };
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
        <div id='header'>
                <header className="d-flex p-4 justify-content-around py-2 py-sm-1">
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 py-2">
                        <div className="d-inline-flex link-body-emphasis text-decoration-none">
                            <div className='imgdiv d-flex justify-content-center' role="img">
                                <img className='rounded' src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1697556868/ici/logo_ICI_2322_sfamnp.png" alt="" />
                            </div>
                        </div>
                    </div>
                </header>
            <div className='borderHeader'>
            </div>
            <a href="https://www.anglia.org/">
                <div className={`fadeHeader ${showCard ? '' : 'hide'}`}>
                    <div className="d-fixed text-end">
                        <div className='divAnglia d-flex flex-row-reverse'>
                            <div className='div-img-anglia'>
                                <img className='img-fluid' src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1679514874/ici/Anglia_Logo_2015_No_background_1_2_tlnnnf.png" alt="" />
                            </div>
                            <div className='card p-1 col-11'>
                                <h1>
                                I.C.I. PATRICIA ALEMIS
                                </h1>
                                <h2>
                                Centro Oficial Anglia Exams
                                </h2>
                                <h3>
                                Exámenes Internacionales
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        </>
    )
}

export default HeaderLog