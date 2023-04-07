import React, { useState, useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Context} from "../Context/Context"

const Header = () => {
    let {sideBarOpen} = useContext(Context)
    return (
        <>
        <div id='header'>
            <div className="container flex-column">
                <div className='header-img col-4 col-lg-4 col-xxl-3 mx-auto'>
                    <img className='img-fluid' src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1680612964/ici/insti_v0n4zi.png" alt="" />
                </div>
                <header className="d-flex align-items-center justify-content-center justify-content-around pt-3 mb-4">
                    <div className="col-1 col-md-1 col-xxl-1">
                        <a href="/ici" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <div className='imgdiv' width="40" height="32" role="img" aria-label="Bootstrap"><img className='img-fluid rounded' src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1680612599/ici/logoweb_bbapg5.png" alt="" /></div>
                        </a>
                    </div>
                    <ul className="nav d-none d-md-flex col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li className='div-nav-link m-1 d-flex align-items-center'><a href="#" className="nav-link p-2">INICIO</a></li>
                        <li className='div-nav-link d-lg-block d-none m-1'><a href="#" className="nav-link p-2">INSCRIPCION</a></li>
                        <li className='div-nav-link d-lg-block d-none m-1'><a href="#" className="nav-link p-2">CONTACTO</a></li>
                        <li className='div-nav-link d-lg-block d-none m-1'><a href="#" className="nav-link p-2">VIAJES</a></li>
                        <li className='div-nav-link d-lg-block d-none m-1'><a href="#" className="nav-link p-2">EXAMENES</a></li>
                        <DropdownButton id='dropDownBtn' className="div-nav-link d-block d-lg-none m-1" variant="none" title="Menu">
                            <Dropdown.Item eventKey="1"><a href="#" className="nav-link p-2">VIAJES</a></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><a href="#" className="nav-link p-2">EXAMENES</a></Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id='dropDownBtn' className="div-nav-link d-block d-lg-none m-1" variant="none" title="Servicios">
                            <Dropdown.Item eventKey="1"><a href="#" className="nav-link p-2">VIAJES</a></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><a href="#" className="nav-link p-2">EXAMENES</a></Dropdown.Item>
                        </DropdownButton>
                    </ul>
                    <div className="col-1 col-md-1 col-xxl-1 text-end">
                        <div id='divAnglia'>
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
                <div className='borderHeader'>
                    <div className='div-nav-link d-flex d-md-none menuMovileDiv'>
                        <button className='nav-link d-flex flex-row menuMovile p-4' onClick={() => sideBarOpen() } >MENU
                        <i className="fi fi-br-menu-burger"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header