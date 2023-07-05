import React, { useState } from "react";
import { Card, Button } from 'react-bootstrap';

function ExamsLevels() {
    const [expanded0, setExpanded0] = useState(false);
    const handleExpand0 = () => {
        setExpanded0(!expanded0);
    }; 
    const [expanded1, setExpanded1] = useState(false);
    const handleExpand1 = () => {
        setExpanded1(!expanded1);
    };
    const [expanded2, setExpanded2] = useState(false);
    const handleExpand2 = () => {
        setExpanded2(!expanded2);
    };
    return (
        <div className='cardsExamsLevels d-flex align-items-center flex-column'>
            {/* CARD 0 */}
            <Card className="cardExamsLevels">
                <Button className="btnLvls text-white" variant="none" onClick={handleExpand0}>
                    <Card.Body>
                        <Card.Title><h3>INGLÉS GENERAL</h3></Card.Title>
                    </Card.Body>
                    {expanded0 && (
                        <Card.Footer>
                        </Card.Footer>
                    )}
                </Button>
            </Card>

            {/* CARD 1 */}
            <Card className="cardExamsLevels">
                <Button className="btnLvls text-white" variant="none" onClick={handleExpand1}>
                    <Card.Body>
                        <Card.Title><h3>INGLÉS COMERCIAL</h3></Card.Title>
                    </Card.Body>
                    {expanded1 && (
                        <Card.Footer>
                        </Card.Footer>
                    )}
                </Button>
            </Card>

            {/* CARD 2 */}
            <Card className="cardExamsLevels">
                <Button className="btnLvls text-white" variant="none" onClick={handleExpand2}>
                    <Card.Body>
                        <Card.Title><h3>INGLÉS YOUNG STARS</h3></Card.Title>
                    </Card.Body>
                    {expanded2 && (
                        <Card.Footer>
                        </Card.Footer>
                    )}
                </Button>
            </Card>
        </div>
    )
}

export default ExamsLevels