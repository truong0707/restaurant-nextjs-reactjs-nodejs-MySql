import React, { useEffect, useState } from 'react'
import DashBoardChef from '../layout/DashBoardChef'
import productServices from '@/services/product';
import { filterTokenUser } from '@/utils/filterTokenUser';
import { InferGetStaticPropsType } from 'next';
import { parserDecodeJWT } from '@/utils/parserDecodeJWT';
import NotAllowed from '../notAllowed/NotAllowed';

export default function index() {
    const [data, setData] = useState();
    const [render, setRender] = useState(false);

    useEffect(() => {
        const localStorageUser = localStorage.getItem("userInfo");
        const tokenUser = filterTokenUser(localStorageUser);
        const infoUser = parserDecodeJWT(tokenUser);

        if (infoUser) {
            if (infoUser.role === 'chef') {
                setRender(true);
            } else {
                setRender(false);
            }
        }

        const fetch = async () => {
            try {
                const res = await productServices.getProductApi(tokenUser, 'all');
                console.log(res);
                setData(res.data.data)
            } catch (error: any) {
                console.log(error.response.data.message)
            }

        }
        fetch()
    }, [])

    return (
        <div style={{ background: '#F2F1F6', minHeight: '900px' }}>
            {
                render? <DashBoardChef>
                    sdsad
                </DashBoardChef> : <NotAllowed />
            }

        </div>
    )
}
