import CardProduct from '@/components/CardProduct/CardProduct';
import MasterLayoutPage from '@/components/MasterLayoutPage'
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import styles from '@/styles/shop.module.css';
import { ProductContext } from '@/store/context/Context';
import CheckboxListCate from '@/components/checkBoxList/CheckBoxListCate';
import { InferGetStaticPropsType } from 'next';
import axios from 'axios';
import Footer from '@/components/Footer/Footer';
import { checkDecodeJWT } from '@/utils/CheckDecodeJWT';


type Repo = {
    name: string;
    stargazers_count: number;
};

export const getStaticProps = async () => {
    const res = await axios.get('https://restaurant-truongit.onrender.com/api/v1/food?foodId=all');
    // const res = await axios.get('http://localhost:8080/api/v1/food?foodId=all');
    
    const data = res.data.data;

    return { props: { product: data } };
}

export default function index({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
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
        // console.log(dataFoodProducts, 'ss')
    })


    return (
        <MasterLayoutPage>
            <div className={styles.wrap_shop}>
                <h1 onClick={handleClickRM}>Delivery menu</h1>

                <div className={styles.bodyContentShop}>
                    <div className={styles.wrapper_item}>
                        {
                            product.map((data: any) => (
                                <div key={data.food_id} className='items'>
                                    <Link className={styles.linkStyle} href="/detail">
                                        <CardProduct nameProduct={data.food_name} img={"https://mamuka.rest/upload/resize_cache/iblock/e91/600_600_1/e6i44m6gb0vbqedscbqx49ptweqcmeda.jpg"} />
                                    </Link>
                                </div>
                            ))
                        }
                    </div>

                    {/*  */}
                    <div className={styles.wrapper_cateList}><CheckboxListCate /></div>
                </div>

            </div>
            <Footer />
        </MasterLayoutPage>
    )
}
