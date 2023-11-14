import React, { useContext, useState, useEffect } from 'react'
import {Context} from "../Context/Context"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleXmark, faPenToSquare, faHouse, faAddressCard, faPlane, faFileSignature, faGraduationCap} from '@fortawesome/free-solid-svg-icons'
const SideBar = () => {
    let {open, sideBarOpen} = useContext(Context)
        return (
            <>
                <div id='sideBar' className='d-flex d-md-none'>
                {open?
                        <div className="sideBarDiv d-flex flex-column flex-shrink-0 p-3">
                            <div className='sideBar-header d-flex justify-content-between'>
                                <a href="/ici" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                                <span className="menuSpan">Menu</span>
                                </a>
                                <button className='exitButton' onClick={() => sideBarOpen() }><FontAwesomeIcon icon={faRectangleXmark} /></button>
                            </div>
                            <hr/>
                            <ul className="nav nav-pills flex-column ">
                                <li onClick={() => sideBarOpen() } className='div-nav-link mt-5 mb-5 my-2'><Link to={'/ici'} className="nav-link p-4">INICIO<FontAwesomeIcon icon={faHouse} className='mx-2' /></Link></li>
                                <li onClick={() => sideBarOpen() } className='div-nav-link mb-5 my-2'><Link to={'/ici/inscripcion'} className="nav-link p-4">INSCRIPCION<FontAwesomeIcon icon={faPenToSquare} className='mx-2'/></Link></li>
                                <li onClick={() => sideBarOpen() } className='div-nav-link mb-5 my-2'><Link to={'/ici/contacto'} className="nav-link p-4">CONTACTO<FontAwesomeIcon icon={faAddressCard} className='mx-2'/></Link></li>
                                <li onClick={() => sideBarOpen() } className='div-nav-link mb-5 my-2'><Link to={'/ici/viajes'} className="nav-link p-4">VIAJES<FontAwesomeIcon icon={faPlane} className='mx-2'/></Link></li>
                                <li onClick={() => sideBarOpen() } className='div-nav-link mb-5 my-2'><Link to={'/ici/examenes'} className="nav-link p-4">EXAMENES<FontAwesomeIcon icon={faFileSignature} className='mx-2'/></Link></li>
                                <li onClick={() => sideBarOpen() } className='div-nav-link mb-5 my-2'><Link to={'/ici/cursos'} className="nav-link p-4">CURSOS<FontAwesomeIcon icon={faGraduationCap} className='mx-2'/></Link></li>
                            </ul>
                            <hr/>
                        </div> 
                    : null}
                </div>
            </>
        )
    }

export default SideBar