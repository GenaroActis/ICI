import React, { useContext } from 'react'
import {Context} from "../Context/Context"
const SideBar = () => {
    let {open} = useContext(Context)

        return (
            <>
            <div id='sideBar' className='d-flex d-md-none'>
            {open?
                    <div id='sideBarDiv' className="d-flex flex-column flex-shrink-0 p-3 bg-light">
                        <a href="/ici" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <span className="fs-4">Menu</span>
                        </a>
                        <hr/>
                            <ul className="nav nav-pills flex-column mb-auto">
                            <li className='div-nav-link m-1 d-flex align-items-center'><a href="#" className="nav-link p-2">INICIO</a></li>
                            <li className='div-nav-link m-1'><a href="#" className="nav-link p-2">INSCRIPCION</a></li>
                            <li className='div-nav-link m-1'><a href="#" className="nav-link p-2">CONTACTO</a></li>
                            <li className='div-nav-link m-1'><a href="#" className="nav-link p-2">VIAJES</a></li>
                            <li className='div-nav-link m-1'><a href="#" className="nav-link p-2">EXAMENES</a></li>
                        </ul>
                        <hr/>
                    </div> 
                : null}
                </div>
            </>
        )
    }

export default SideBar