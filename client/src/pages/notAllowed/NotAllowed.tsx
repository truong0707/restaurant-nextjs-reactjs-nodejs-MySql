import React, { useEffect, useState } from 'react'
import MasterLayoutPage from '../layout/MasterLayoutPage'
import Notification from '@/components/Alert/Notification'
import BackdropProgressLoading from '@/components/BackdropProgressLoading/BackdropProgressLoading';

export default function NotAllowed() {
    const [render, setRender] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            // Sau khoảng thời gian nhất định (ví dụ: 3 giây), cập nhật trạng thái mới
            setRender(true);
        }, 1000);


        // Cleanup function để xóa bỏ timeout nếu cần thiết
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <MasterLayoutPage>
            {
                render ? <>
                    <p style={{ marginTop: '30px' }}>.</p>
                    <div style={{ width: '60%', height: '200px', background: '#fff', margin: 'auto', padding: '20px', borderRadius: '10px', marginTop: '60px' }}>
                        <Notification />
                    </div>
                </> : <BackdropProgressLoading/>
            }
        </MasterLayoutPage>
    )
}
