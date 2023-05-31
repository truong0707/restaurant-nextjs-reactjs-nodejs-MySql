import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

export default function Notification() {
    return (
        <Stack sx={{ width: '100%', height: '100%' }} spacing={2}>
            <Alert sx={{ height: '100%' }} severity="info">
                <AlertTitle>Thông báo!</AlertTitle>
                Chỉ có Đầu bếp mới có thể sử dụng chức năng này — <strong>Hãy đăng ký với vài trò là đầu bếp!</strong>
                <p>Khi đăng ký tài khoản, bạn hãy chọn vài trò đầu bếp!</p>
                <Link href="/register?redirect=/">
                      <p>Đăng ký ngay!</p>
                </Link>
            </Alert>
        </Stack>
    );
}