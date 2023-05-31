import React, { useEffect, useState } from 'react'
import DashBoardChef from '../layout/DashBoardChef'
import StepperTab from '@/components/stepper/StepperTab'
import { filterTokenUser } from '@/utils/filterTokenUser';
import { parserDecodeJWT } from '@/utils/parserDecodeJWT';
import NotAllowed from '../notAllowed/NotAllowed';

export default function YourProducts() {
    const [render, setRender] = useState(false);


    useEffect(() => {
        const localStorageUser = localStorage.getItem("userInfo");
        const token = filterTokenUser(localStorageUser);
        const infoUser = parserDecodeJWT(token);

        if (infoUser) {
            if (infoUser.role === 'chef') {
                setRender(true);
            } else {
                setRender(false);
            }
        }
    }, [render]);

    return (
        <div style={{ background: '#F2F1F6', minHeight: '900px' }}>
            {
                render ?
                    <DashBoardChef>
                        <div style={{ background: '#fff', width: '100%', padding: '20px', borderRadius: '10px' }}>
                            <StepperTab />
                        </div>
                    </DashBoardChef> : <NotAllowed/>
            }
        </div>
    )
}
