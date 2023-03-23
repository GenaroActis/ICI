import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'

export default function BasicPopover() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    const buttons = [
        <Button sx={{
            color: "white",
            borderColor: 'white',
            borderRadius: 2,
            fontSize: 20,
            }} onClick={handleClose} key="one"><Link className="nav-link" aria-current="page"  to={'/ici'}>Inicio</Link></Button>,
        <Button sx={{
            color: "white",
            borderColor: 'white',
            fontSize: 20,
            }} onClick={handleClose} key="two"><Link className="nav-link" aria-current="page"  to={'/ici/inscripcion'}>Inscripcion</Link></Button>,
        <Button sx={{
            color: "white",
            borderColor: 'white',
            borderRadius: 2,
            fontSize: 20,
            }} onClick={handleClose} key="three"><Link className="nav-link" aria-current="page"  to={'/ici/contacto'}>Contacto</Link></Button>,
    ];

    return (
        <div className='button'>
            <Button aria-describedby={id} variant="contained" onClick={handleClick}>
            Menu
            </Button>
                <Popover
                id={id}
                classes={{
                    paper: "my-popover",
                }}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }} 
                >
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
            </Popover>
        </div>
    );
}