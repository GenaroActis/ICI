import React, { useContext } from 'react';
import {Context} from "../Context/Context";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faPenToSquare, faHouse, faAddressCard, faPlane, faFileSignature, faGraduationCap} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    let {sideBarOpen} = useContext(Context)
    
    return (
        <>
        <div id='header'>
            <div className="container flex-column">
                <div className='header-img col-7 col-sm-5 col-lg-4 col-xxl-3 mx-auto py-2'>
                    <img className='img-fluid' src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1680612964/ici/insti_v0n4zi.png" alt="" />
                </div>
                <header className="d-flex align-items-center justify-content-sm-evenly justify-content-md-between justify-content-center mb-5 py-4 py-sm-3 mb-sm-4">
                    <div className="col-4 col-sm-3 col-md-1 col-xxl-1 py-2">
                        <Link to={'/ici/contacto'} className="d-inline-flex link-body-emphasis text-decoration-none">
                            <div className='imgdiv' role="img" aria-label="Bootstrap">
                                <img className='img-fluid rounded' src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1680612599/ici/logoweb_bbapg5.png" alt="" />
                            </div>
                        </Link>
                    </div>
                    <ul id='buttonsHeader' className="nav d-none d-md-flex col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <div className='d-flex mt-2'>
                            <li className='div-nav-link d-md-block d-none m-1'><Link to={'/ici'} className="nav-link px-1 py-3 d-flex inicio">INICIO<FontAwesomeIcon icon={faHouse} className='ms-1' /></Link></li>
                            <li className='div-nav-link d-md-block d-none m-1'><Link to={'/ici/inscripcion'} className="nav-link d-flex px-1 py-3 inscripcion">INSCRIPCION<FontAwesomeIcon icon={faPenToSquare} className='ms-1'/></Link></li>
                            <li className='div-nav-link d-md-block d-none m-1'><Link to={'/ici/contacto'} className="nav-link d-flex px-1 py-3 contacto">CONTACTO<FontAwesomeIcon icon={faAddressCard} className='ms-1'/></Link></li>
                        </div>
                        <div className='d-flex mt-2'>
                            <li className='div-nav-link d-md-block d-none m-1'><Link to={'/ici/viajes'} className="nav-link d-flex px-1 py-3 viajes">VIAJES<FontAwesomeIcon icon={faPlane} className='ms-1'/></Link></li>
                            <li className='div-nav-link d-md-block d-none m-1'><Link to={'/ici/examenes'} className="nav-link d-flex px-1 py-3 examenes">EXAMENES<FontAwesomeIcon icon={faFileSignature} className='ms-1'/></Link></li>
                            <li className='div-nav-link d-md-block d-none m-1'><Link to={'/ici/cursos'} className="nav-link d-flex px-1 py-3 cursos">CURSOS<FontAwesomeIcon icon={faGraduationCap} className='ms-1'/></Link></li>
                        </div>
                    </ul>
                    <div className="d-none d-md-block col-2 col-sm-1 col-md-1 col-xxl-1 text-end">
                        <div className='divAnglia d-flex flex-row-reverse flex-sm-row flex-md-row-reverse'>
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
                </header>
            </div>
            <div onClick={() => sideBarOpen() }  className='borderHeader'>
                <div className='div-nav-link d-flex d-md-none menuMovileDiv'>
                    <button type='button' className='nav-link d-flex flex-row menuMovile p-4' >MENU
                    <FontAwesomeIcon icon={faBars} className='ms-2' />
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header