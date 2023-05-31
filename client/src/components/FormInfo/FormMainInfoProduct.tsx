import { Box, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import React, { useRef, useState } from 'react';
import styles from '@/styles/styleComponent/formInfo.module.css';
import SelectBtn from '../selectGroup/SelectBtn';
import CommonUtils from '@/utils/CommonUtils';

export default function FormMainInfoProduct() {
    /* State value input */
    const options = [
        { value: '', label: "Mặc định" },
        { value: 1, label: "Admin" },
        { value: 2, label: "Student" },
        { value: 3, label: "Teacher" },
    ];
    const [valueInputs, setValueInputs] = useState({});
    const [valueErrorsInputs, setValueErrorsInputs] = useState({});
    const [selectedOption, setSelectedOption] = useState(options[0].value);
    const inputRef = useRef<any>(null);
    const [image, setImage] = React.useState<any>();


    /* Handle event change inputs */
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nameInput = e.target.name;
        let valueInput = e.target.value;

        setValueInputs((state) => ({ ...state, [nameInput]: valueInput }));
        console.log(image, 'image')
    }

    /* Handle event change inputs text areal */
    const handleTextArialChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const nameInputAreal = e.target.name;
        let valueInputAreal = e.target.value;

        setValueInputs((state) => ({ ...state, [nameInputAreal]: valueInputAreal }));
    }

    /* Handle event change inputs select */
    const handleSelectChange = (e: any) => {
        const nameInputSelect = e.target.name;
        let valueInputSelect = e.target.value;

        const optionValues = options.map((option) => option.value);
        if (optionValues.includes(valueInputSelect)) {
            setSelectedOption(valueInputSelect);
        }

        setValueInputs((state) => ({ ...state, [nameInputSelect]: valueInputSelect })); //
    }

    /*  */
    const handleChangeIMG = async (e: any) => {
        const data = e.target.files;
        const file = data[0];

        if (file) {
            const b64 = await CommonUtils.getBase64(file);
            const objectUrl = URL.createObjectURL(file);
            setImage({
                previewImg: objectUrl,
                thumbnail: b64,
                fileName: file.name,
            });

            console.log(image, 'image')
        }
    }

    /* handlle open file local */
    const handleClick = () => {
        inputRef.current.click();
    };

    return (
        <div className={styles.form_info_productMain}>
            <h5>About Product</h5>
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent={'space-between'}>
                <Stack className={styles.wrapp_input_formInfoProduct} direction="column">
                    <p>Tên món</p>
                    <input name='name_product' onChange={handleInputChange} />
                </Stack>

                <Stack className={styles.wrapp_input_formInfoProduct} direction="column">
                    <p>Giá món</p>
                    <input name='price_product' onChange={handleInputChange} />
                </Stack>

                <Stack className={styles.wrapp_input_formInfoProduct} direction="column">
                    <p>Giá giảm</p>
                    <input name='pricePromotion_product' onChange={handleInputChange} />
                </Stack>
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent={'space-between'}>
                <Stack className={styles.wrapp_input_formInfoProduct} direction="column">
                    <p>Số lượng</p>
                    <input name='quantity' onChange={handleInputChange} />
                </Stack>

                <Stack className={styles.wrapp_input_formInfoProduct} direction="column">
                    <p>Đây là thức uống hay đồ ăn?</p>
                    <input name='type_product' onChange={handleInputChange} />
                </Stack>

                <Stack className={styles.wrapp_input_formInfoProduct} direction="column">
                    <p>Loại sản phẩm?</p>
                    <FormControl size="small">
                        <InputLabel style={{ fontSize: '15px' }} id="demo-select-small">Role</InputLabel>
                        <Select
                            style={{ fontSize: '13px' }}
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={selectedOption}
                            label="role"
                            name="typeCate_product"
                            onChange={handleSelectChange}
                        >
                            {options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Stack>
            </Stack>


            <Stack style={{ marginTop: '30px' }} direction={{ xs: 'column', sm: 'row' }} justifyContent={'space-between'}>
                <Stack className={styles.wrapp_input_formInfoProduct} direction="column">
                    <p>Ảnh món</p>
                    <img
                        className={styles.avatar}
                        src={
                            image?.previewImg
                                ? image?.previewImg
                                : `https://mamuka.rest/upload/resize_cache/iblock/c04/600_600_1/n0kuvsoni8wj1vrl0qna63i955kqmits.jpg`
                        }
                        alt="Avatar"
                    />
                    <Box>
                        <input
                            type="file"
                            hidden
                            id="image"
                            ref={inputRef}
                            onChange={handleChangeIMG}
                        />

                        <input
                            type="button"
                            value="Select a File"
                            id="image"
                            onClick={handleClick}
                        />
                    </Box>
                </Stack>

                <Stack className={styles.wrapp_input_formInfoProduct} direction="column">
                    <p>Mô tả sản phẩm</p>
                    <textarea id="w3review" name="decription" onChange={handleTextArialChange}></textarea>
                </Stack>

                <Stack className={styles.wrapp_input_formInfoProduct} direction="column">
                </Stack>
            </Stack>
        </div>
    )
}
