import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const buttons = [
    <Button sx={{
        color: "white",
        borderColor: 'white',
        borderRadius: 2,
        fontSize: 20,
        }} key="one">Inicio</Button>,
    <Button sx={{
        color: "white",
        borderColor: 'white',
        fontSize: 20,
        }} key="two">Inscripcion</Button>,
    <Button sx={{
        color: "white",
        borderColor: 'white',
        borderRadius: 2,
        fontSize: 20,
        }} key="three">Contacto</Button>,
];

export default function GroupOrientation() {
    return (
    <Box
        sx={{
        display: 'flex',
        '& > *': {
            m: 1,
        },
        bgcolor: '#000289',
        }}
    >
        <ButtonGroup
        orientation="vertical"
        aria-label="vertical button group"
        sx={{
            bgcolor: '#000289',
            color: "white",
            }}
        >
        {buttons}
        </ButtonGroup>
    </Box>
    );
}