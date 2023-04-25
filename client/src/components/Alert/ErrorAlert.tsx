import React from 'react';
import { Alert, AlertTitle } from '@mui/material';

interface PropsErrType {
    messageError: string,
}

export default function ErrorAlert(props: PropsErrType) {
    return (
        <div>
            <Alert style={{ maxWidth: '440px', margin: 'auto', marginTop: "70px", marginBottom:'20px'}} severity="error">
                <AlertTitle>Error</AlertTitle>
                {props.messageError} — <strong>Lỗi!</strong>
            </Alert>
        </div>
    )
}
