import React from 'react'
import { Box, Container, Grid, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom'

const buttons = [
    <Button id='buttonLink' key="one"><Link className="nav-link" aria-current="page"  to={'/ici/inscripcion'}>Inscripcion</Link></Button>,
    <Button id='buttonLink' key="two"><Link className="nav-link" aria-current="page"  to={'/ici'}>Inicio</Link></Button>,
    <Button id='buttonLink' key="three"><Link className="nav-link" aria-current="page"  to={'/ici/contacto'}>Contacto</Link></Button>,
];

const Footer = () => {
    return (
        <>
        <div className='d-flex flex-column align-items-center'>
            <div id='imgFooterDiv' className='col-4 col-md-5 col-lg-4 col-xl-3 col-xxl-2'>
                <img src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1680291150/ici/logoicipng_unfb1t.png" className='img-fluid' id='imgFooter' alt="" />
            </div>
            <Box
            id="box"
            sx={{
            width: "100%",
            height: "auto",
            backgroundColor: "#000289",
            paddingTop: "5rem",
            paddingBottom: "1rem",
            }}
            >
                <Container id="container" maxWidth="lg">
                    <Grid container direction="column" alignItems="center">
                        
                        <Grid container direction="column" className='mb-1 pt-4 pb-1' alignItems="center">
                            <h2 className='Coae'>
                                Centro Oficial Anglia Exams
                            </h2>
                        </Grid>
                        <ButtonGroup
                            orientation="horizontal"
                            aria-label="vertical button group"
                            sx={{
                                bgcolor: '#000289',
                                color: "white",
                                }}
                            >
                            {buttons}
                        </ButtonGroup>
                    </Grid>
                </Container>
            </Box>
    </div>
        </>
    )
}

export default Footer