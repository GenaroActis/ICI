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
        <Box
        id="box"
        sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#000289",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        }}
        >
        <Container id="container" maxWidth="lg">
            <Grid container direction="column" alignItems="center">
                <div className='imgFooterDiv'>
                    <img src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1679510940/ici/logoicipng_zbsdom.png" className='imgFooter' alt="" />
                </div>
                <Grid container direction="column" className='mb-1 pt-4' alignItems="center">
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
        </>
    )
}

export default Footer