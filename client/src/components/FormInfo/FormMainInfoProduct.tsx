import { Stack } from '@mui/material'
import React from 'react';
import styles from '@/styles/styleComponent/formInfo.module.css';

export default function FormMainInfoProduct() {
    return (
        <div className={styles.form_info_productMain}>
            <h5>About Product</h5>
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent={'space-between'}>
                <Stack className={styles.wrapp_input_formInfoProduct}  direction="column">
                    <p>Tên món</p>
                    <input />
                </Stack>

                <Stack className={styles.wrapp_input_formInfoProduct}  direction="column">
                    <p>Mô tả</p>
                    <input />
                </Stack>

                <Stack className={styles.wrapp_input_formInfoProduct}  direction="column">
                    <p>Giá món</p>
                    <input />
                </Stack>
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent={'space-between'}>
                <Stack className={styles.wrapp_input_formInfoProduct}  direction="column">
                    <p>Giá khuyến mãi</p>
                    <input />
                </Stack>

                <Stack className={styles.wrapp_input_formInfoProduct}  direction="column">
                    <p>Số lượng</p>
                    <input />
                </Stack>

                <Stack className={styles.wrapp_input_formInfoProduct}  direction="column">
                    <p>Số lượng</p>
                    <input />
                </Stack>
            </Stack>
        </div>
    )
}
