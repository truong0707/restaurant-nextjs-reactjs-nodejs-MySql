import CardProduct from '@/components/CardProduct/CardProduct';
import MasterLayoutPage from '@/components/MasterLayoutPage'
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import styles from '@/styles/shop.module.css';
import { ProductContext } from '@/store/context/Context';
import CheckboxListCate from '@/components/checkBoxList/CheckBoxListCate';

export default function index() {
    const [cc, setCC] = useState(false);

    const handleClick = (e: any) => {
        console.log(e);
        setCC(true);
    };

    const handleClickRM = () => {
        setCC(false);
    }

    const { dataFoodProducts } = useContext(ProductContext);

    useEffect(() => {
        console.log(dataFoodProducts, 'ss')
    })


    return (
        <MasterLayoutPage>
            <div className={styles.wrap_shop}>
                <h1 onClick={handleClickRM}>Delivery menu</h1>

                <div className={styles.bodyContentShop}>
                    <div className={styles.wrapper_item}>
                        {
                            dataFoodProducts.map((data: any) => (
                                <div key={data.food_id} className='items'>
                                    <Link className={styles.linkStyle} href="/detail">
                                        <CardProduct urlImage="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Rm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                                    </Link>
                                </div>
                            ))
                        }
                        {
                            dataFoodProducts.map((data: any) => (
                                <div key={data.food_id} className='items'>
                                    <Link className={styles.linkStyle} href="/detail">
                                        <CardProduct urlImage="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Rm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                                    </Link>
                                </div>
                            ))
                        }
                        {
                            dataFoodProducts.map((data: any) => (
                                <div key={data.food_id} className='items'>
                                    <Link className={styles.linkStyle} href="/detail">
                                        <CardProduct urlImage="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Rm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                                    </Link>
                                </div>
                            ))
                        }
                    </div>

                    {/*  */}
                    <div className={styles.wrapper_cateList}><CheckboxListCate/></div>
                </div>


            </div>
        </MasterLayoutPage>
    )
}
