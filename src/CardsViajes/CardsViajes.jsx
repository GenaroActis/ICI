import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import ViajesFotos from './ViajesFotos';

const CardsViajes = () => {
    const [expanded0, setExpanded0] = useState(false);
    const handleExpand0 = () => {
        setExpanded0(!expanded0);
    };
    return (
        <div className='cardsExams container-fluid'>
            {/* CARD 0 */}
            <Card className= 'collapsed-card cardExams m-4'>
                <Card.Body>
                    <Card.Title><h3>Viajes Educativos</h3></Card.Title>
                    <h5>Existen dos salidas grupales por año – enero y julio, las cuales incluyen la conducción permanente de uno o más líderes/monitores de grupo durante todo el viaje. A su vez, también es posible viajar en forma individual en cualquier otra época del año.</h5>
                    <a target='_blank' className='dosEm' href="https://www.angliaexams.com/study-trips">Mas Informacion...</a>
                </Card.Body>
            </Card>

            {/* CARD 1 */}
            <Card className= {expanded0 ? 'expanded-card cardExams m-4' : 'collapsed-card cardExams m-4'}>
                <Card.Body>
                    <Card.Title><h3>Fotos</h3></Card.Title>
                </Card.Body>
                {expanded0 && (
                    <Card.Footer className="cardFooterLvls">
                        <ViajesFotos/>
                    </Card.Footer>
                )}
                <Button className="btn2" variant="primary" onClick={handleExpand0}>
                    {expanded0 ? 'Ocultar imagenes' : 'Ver imagenes...'}
                </Button>
            </Card>
        </div>
    )
}

export default CardsViajes