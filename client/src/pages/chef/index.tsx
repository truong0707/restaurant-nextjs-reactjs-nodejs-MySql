import React, { useEffect, useState } from 'react'
import DashBoardChef from '../layout/DashBoardChef'
import productServices from '@/services/product';
import { filterTokenUser } from '@/utils/filterTokenUser';
import { InferGetStaticPropsType } from 'next';

export default function index() {
    const [data, setData] = useState();

    useEffect(() => {
        const localStorageUser = localStorage.getItem("userInfo");
        const tokenUser = filterTokenUser(localStorageUser);

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
    },[])

    return (
        <div style={{ background: '#F2F1F6', minHeight: '900px' }}>
            <DashBoardChef>
                sdsad
            </DashBoardChef>
        </div>
    )
}
