import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import ButtonsPop from "./ButtonsPop"

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
            <ButtonsPop/>
            </Popover>
        </div>
    );
}