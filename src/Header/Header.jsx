import React, { useContext, useEffect, useState } from 'react';
import {Context} from "../Context/Context";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faPenToSquare, faHouse, faAddressCard, faPlane, faFileSignature, faGraduationCap, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
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
                            <div className='imgdiv' role="img">
                                <img className='rounded' src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1697556868/ici/logo_ICI_2322_sfamnp.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <ul id='buttonsHeader' className="nav d-none d-md-flex col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <div className='d-flex align-items-center'>
                            <li className='div-nav-link  d-md-block d-none m-1'><Link to={'/ici'} className="nav-link px-1 py-3 d-flex">INICIO<FontAwesomeIcon icon={faHouse} className='ms-1' /></Link></li>
                            <li className='div-nav-link d-md-block d-none m-1'><Link to={'/ici/inscripcion'} className="nav-link d-flex px-1 py-3">INSCRIPCION<FontAwesomeIcon icon={faPenToSquare} className='ms-1'/></Link></li>
                            <li className='div-nav-link d-md-block d-none m-1'><Link to={'/ici/contacto'} className="nav-link d-flex px-1 py-3">CONTACTO<FontAwesomeIcon icon={faAddressCard} className='ms-1'/></Link></li>
                        </div>
                        <Dropdown drop='down-centered' className='d-flex align-items-center'>
                            <Dropdown.Toggle className='div-nav-link d-md-block d-none p-0 m-1'>
                                <div className='nav-link d-flex px-1 py-3'>
                                SERVICIOS <FontAwesomeIcon icon={faCaretDown} />
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='menuContainer'>
                                <Dropdown.Item className='dropDownItems p-3 nav-link' href="/ici/viajes">VIAJES<FontAwesomeIcon icon={faPlane} className='ms-1'/></Dropdown.Item>
                                <Dropdown.Item className='dropDownItems p-3 nav-link' href="/ici/examenes">EXAMENES<FontAwesomeIcon icon={faFileSignature} className='ms-1'/></Dropdown.Item>
                                <Dropdown.Item className='dropDownItems p-3 nav-link' href="/ici/cursos"> CURSOS<FontAwesomeIcon icon={faGraduationCap} className='ms-1'/></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ul>
                </header>
            <div className='borderHeader'>
                <div className='div-nav-link d-flex d-md-none menuMovileDiv'>
                    <button onClick={() => sideBarOpen() } type='button' className='nav-link d-flex flex-row menuMovile p-4' >MENU
                    <FontAwesomeIcon icon={faBars} className='ms-2' />
                    </button>
                </div>
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

export default Header