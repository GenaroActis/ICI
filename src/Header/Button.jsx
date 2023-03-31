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
        <Button id='buttonPopover' onClick={handleClose} key="one">
            <Link className="nav-link" aria-current="page"  to={'/ici'}>Inicio</Link>
        </Button>,
        <Button id='buttonPopover' onClick={handleClose} key="two">
            <Link className="nav-link" aria-current="page"  to={'/ici/inscripcion'}>Inscripcion</Link>
        </Button>,
        <Button id='buttonPopover' onClick={handleClose} key="three">
            <Link className="nav-link" aria-current="page"  to={'/ici/contacto'}>Contacto</Link>
        </Button>,
    ];

    return (
        <div id='buttonMenuDiv'>
            <button id='buttonMenu' aria-describedby={id} variant="contained" onClick={handleClick}>
            Menu
            </button>
                <Popover
                id="Popover"
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
                }}
            >
                <ButtonGroup
                orientation="vertical"
                aria-label="vertical button group"
                >
                {buttons}
                </ButtonGroup>
            </Box>
            </Popover>
        </div>
    );
}