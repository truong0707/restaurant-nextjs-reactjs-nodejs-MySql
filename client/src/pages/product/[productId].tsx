import { useRouter } from 'next/router'
import React from 'react'
import MasterLayoutPage from '../layout/MasterLayoutPage';
import Footer from '@/components/Footer/Footer';
import styles from '@/styles/productDetail.module.css'
import TabMenu from '@/components/tabMenu/TabMenu';

export default function productDetail() {
  const router = useRouter();
  const idProduct = router.query.productId;

  

  return (
    <MasterLayoutPage>
      <div className='wrapp_product_detail' style={{ paddingTop: '100px', width: "90%", margin: 'auto', paddingBottom: '20px' }}>
        {/* detail, id: {idProduct} */}
        <div className={styles.main_Info_Product}>
          <img src='https://mamuka.rest/upload/resize_cache/iblock/c04/600_600_1/n0kuvsoni8wj1vrl0qna63i955kqmits.jpg' alt='anh_san_pham' />
          <div>
            <h4>$18.00 $20.00</h4>
            <h3>Parmesan Vegetable</h3>

            <ul>
              <li>Lay chicken thighs into the bottom of a 4-quart slow cooker.</li>
              <li>Whisk soy sauce, ketchup, honey, garlic, and basil together in a bowl; pour over the chicken.</li>
            </ul>
          </div>
        </div>

        <div>
         <TabMenu/>
        </div>
      </div>

      <Footer />
    </MasterLayoutPage>
  )
}
