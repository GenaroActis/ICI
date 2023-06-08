import React from 'react'
import { Card } from 'react-bootstrap';


const Contacto = () => {
    return (
    <>
        <div id="contacto">
        <Card id="card" className="text-center" style={{ fontFamily: 'Exo', marginTop: '7px', boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.5)' }}>
            <Card.Body>
            <h1 id="text1" style={{ color: '#000' }}>
                I.C.I. Patricia Alemis
            </h1>
            <br />
            <h2 id="text2" style={{ fontSize: '1.25rem' }}>
                Texto descriptivo del instituto
            </h2>
            <br />
            <h3 id="text3" style={{ color: '#000' }}>
                Centro Oficial Anglia Exams
            </h3>
            <br />
            <h4 id="text4" style={{ fontSize: '0.875rem' }}>
                Independencia 25, San Pedro (Buenos Aires)
            </h4>
            </Card.Body>
        </Card>
        <div id="whatsapp">
            <h2>+54 3329 474259</h2>
            <a href="https://wa.me/+543329474259?text=Hola,%20te%20quería%20consultar%20sobre..." className="whatsapp" aria-current="page" target="_blank">
            <i className="fa fa-whatsapp whatsapp-icon"></i>
            </a>
        </div>
        <div id="iframe" className="col-12 col-sm-10 col-md-9 col-lg-6 col-xl-5 col-xxl-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.9953177457774!2d-59.67163998421185!3d-33.683185416881635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ba22da169d1a37%3A0x43eed8eb7ff026e2!2sIndependencia%2025%2C%20San%20Pedro%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1679587879376!5m2!1ses!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
        </>
    )
}

export default Contacto