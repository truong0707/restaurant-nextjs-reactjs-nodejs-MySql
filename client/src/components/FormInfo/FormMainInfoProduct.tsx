import { Stack } from '@mui/material'
import React from 'react';
import styles from '@/styles/styleComponent/formInfo.module.css';
import SelectBtn from '../selectGroup/SelectBtn';

export default function FormMainInfoProduct() {
    return (
        <div className={styles.form_info_productMain}>
            <h5>About Product</h5>
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent={'space-between'}>
                <Stack className={styles.wrapp_input_formInfoProduct} direction="column">
                    <p>Tên món</p>
                    <input />
                </Stack>

                <Stack className={styles.wrapp_input_formInfoProduct} direction="column">
                    <p>Mô tả</p>
                    <input />
                </Stack>

                <Stack className={styles.wrapp_input_formInfoProduct} direction="column">
                    <p>Giá món</p>
                    <input />
                </Stack>
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent={'space-between'}>
                <Stack className={styles.wrapp_input_formInfoProduct} direction="column">
                    <p>Giá khuyến mãi</p>
                    <input />
                </Stack>

                <Stack className={styles.wrapp_input_formInfoProduct} direction="column">
                    <p>Số lượng</p>
                    <input />
                </Stack>

                <Stack className={styles.wrapp_input_formInfoProduct} direction="column">
                    <p>Số lượng</p>
                    <input />
                </Stack>
            </Stack>


            <Stack style={{ marginTop: '30px' }} direction={{ xs: 'column', sm: 'row' }} justifyContent={'space-between'}>
                <Stack className={styles.wrapp_input_formInfoProduct} direction="column">
                    <p>Ảnh món</p>
                    <img src='https://mamuka.rest/upload/resize_cache/iblock/c04/600_600_1/n0kuvsoni8wj1vrl0qna63i955kqmits.jpg' alt='anh-mon' />
                </Stack>

                <Stack className={styles.wrapp_input_formInfoProduct} direction="column">
                    <p>Số lượng</p>
                    <input />
                </Stack>

                <Stack className={styles.wrapp_input_formInfoProduct} direction="column">
                    <p >Loại món</p>
                    <SelectBtn options={['All', 'Bún', 'Đồ Nướng', 'Khai vị']} setIndexRole={undefined} indexType={0} />
                </Stack>
            </Stack>
        </div>
    )
}
