import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Stack } from '@mui/material';

export default function BackdropProgressLoading() {
    const [open, setOpen] = React.useState(true);


    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div style={{ marginTop: '100px'}}>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <Stack spacing={1}>
                    <CircularProgress style={{marginLeft:'10px'}} color="inherit" />
                    <p>Loading....</p>
                </Stack>

            </Backdrop>
        </div>
    );
}