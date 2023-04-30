import React from 'react';
import { Alert, AlertTitle } from '@mui/material';

interface PropsErrType {
    messageError: string,
}

export default function ErrorAlert(props: PropsErrType) {
    return (
        <div>
            <Alert style={{ maxWidth: '440px', margin: 'auto', marginTop: "10px", marginBottom:'20px'}} severity="error">
                <AlertTitle>Có lỗi xảy ra!</AlertTitle>
                {props.messageError} — <strong>Chú ý!</strong>
            </Alert>
        </div>
    )
}
