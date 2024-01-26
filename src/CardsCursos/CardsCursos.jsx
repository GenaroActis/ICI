import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import ExamsLevels from "../CardsExams/ExamsLevels.jsx";

const CardsCursos = () => {
    const [expanded0, setExpanded0] = useState(false);
    const handleExpand0 = () => {
        setExpanded0(!expanded0);
    }; 
    const [expanded1, setExpanded1] = useState(false);
    const handleExpand1 = () => {
        setExpanded1(!expanded1);
    };
    return (
        <div className='cardsExams container-fluid'>
            {/* CARD 0 */}
            <Card className= {expanded0 ? 'expanded-card cardExams m-4' : 'collapsed-card cardExams m-4'}>
                <Card.Body>
                    <Card.Title><h3>Niveles de Cursos</h3></Card.Title>
                    <h5>Examenes Internacionales</h5>
                </Card.Body>
                {expanded0 && (
                    <Card.Footer>
                        <div className='card'>
                            <h1>Young Stars</h1>
                            <h3>Little Star</h3>
                            <h3>Rising Star</h3>
                            <h3>Shining Star</h3>
                        </div>
                        <div className='card'>
                            <h1>Inicial</h1>
                            <h3>Children´s orals 1</h3>
                            <h3>Children´s orals 2</h3>
                            <h3>Children´s orals 3</h3>
                            <h3>First step</h3>
                        </div>
                        <div className='card'>
                            <h1>Regular</h1>
                            <h3>Junior</h3>
                            <h3>Primary</h3>
                            <h3>Preliminary A1 CEFR</h3>
                            <h3>Elementary A2 CEFR</h3>
                            <h3>Pre-Intermediate A2+ CEFR</h3>
                            <h3>Intermediate B1 CEFR</h3>
                            <h3>Advanced B2 CEFR</h3>
                            <h3>Proficiency C1 CEFR</h3>
                            <h3>Mastery C2 CEFR</h3>
                        </div>
                        <div className='card'>
                            <h1>Business</h1>
                            <h3>Practical Business English A2+</h3>
                            <h3>Intermediate Business English B1</h3>
                            <h3>Advanced Business English B2</h3>
                            <h3>Profiency in Business English C1</h3>
                        </div>
                        <div className='card'>
                            <h1>Adult Learner</h1>
                            <h3>Level 1</h3>
                            <h3>Level 2</h3>
                            <h3>Level 3</h3>
                            <h3>Level 4</h3>
                        </div>
                        <div className='card'>
                            <h1>Teachers</h1>
                            <h2>Cite: Certificate of Internacional Teacher of English</h2>
                            <h3>Very young learners</h3>
                            <h3>Young learners</h3>
                            <h3>Senior</h3>
                        </div>
                    </Card.Footer>
                )}
                <Button className="btn2" variant="primary" onClick={handleExpand0}>
                    {expanded0 ? 'Leer menos' : 'Leer mas...'}
                </Button>
            </Card>

            {/* CARD 1 */}
            <Card className= {expanded1 ? 'expanded-card cardExams m-4' : 'collapsed-card cardExams m-4'}>
                <Card.Body>
                    <Card.Title><h3>FOTOS</h3></Card.Title>
                </Card.Body>
                {/* {expanded1 && (
                    <Card.Footer className="cardFooterLvls">
                        <ExamsLevels/>
                    </Card.Footer>
                )} */}
                {/* <Button className="btn2" variant="primary" onClick={handleExpand1}>
                    {expanded1 ? 'Ver Fotos' : 'Leer mas...'}
                </Button> */}
            </Card>
        </div>
    )
}

export default CardsCursos