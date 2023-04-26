import CardProduct from '@/components/CardProduct/CardProduct';
import MasterLayoutPage from '@/components/MasterLayoutPage'
import Link from 'next/link';
import React, { useState } from 'react';
import styles from '@/styles/shop.module.css';


const image = [
    { urlVideo: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Rm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
    { urlVideo: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Rm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
    { urlVideo: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Rm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
    { urlVideo: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Rm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
    { urlVideo: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Rm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
    { urlVideo: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Rm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
]

export default function index() {
    const [cc, setCC] = useState(false);

    const handleClick = (e: any) => {
        console.log(e);
        setCC(true);
    };

    const handleClickRM = () => {
        setCC(false);
    }
    return (
        <MasterLayoutPage>
             <div style={{ background: '', width: '90%', margin: 'auto', marginTop: '100px', marginBottom: '50px' }} className='wrap_shop'>
                <h1 onClick={handleClickRM}>Delivery menu</h1>

                <div className={styles.wrapper_item}>
                    {
                        image.map((data) => (
                            <div className='items'>
                                <Link href="/detail">
                                    <CardProduct urlImage={data.urlVideo} />
                                </Link>

                            </div>
                        ))
                    }
                </div>
            </div>
        </MasterLayoutPage>
    )
}
