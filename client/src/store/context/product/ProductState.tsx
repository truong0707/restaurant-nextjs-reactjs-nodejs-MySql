import { useState } from 'react';
import { ProductContext } from '../Context';
import axios from 'axios';
import { useEffect } from 'react';


export default function CardProductState({ children }: any) {
    const [cardProducts, setCardProducts] = useState([]);

    useEffect(() => {
        // axios.get(`http://localhost:8080/api/v1/food?foodId=all`).then(res => setCardProducts(res.data.data));
        axios.get(`https://restaurant-truongit.onrender.com/api/v1/food?foodId=all`).then(res => setCardProducts(res.data.data));
    }, []);



    return (
        <>
            <ProductContext.Provider value={{
                dataFoodProducts: cardProducts
            }}>
                {children}
            </ProductContext.Provider>

        </>
    )
}
