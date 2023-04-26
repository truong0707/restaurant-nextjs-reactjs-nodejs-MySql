import React, { useEffect, useState } from 'react';
import { TypeObjectInput, ErrorSubmit, TypeError } from '../login/index';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { register } from '../../store/redux/actions/userActions';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router"
import ErrorAlert from "../../components/Alert/ErrorAlert";
import BackdropProgressLoading from '@/components/BackdropProgressLoading/BackdropProgressLoading';
import styles from '@/styles/styleComponent/loginAndRegis.module.css'


interface StateStoreRegis {
  userRegister: {
    loading: boolean,
    userInfo: {

    }
    error: boolean,
  }
}

export default function index() {
  const [inputs, setInputs] = useState<TypeObjectInput>({});
  const [errors, setErrors] = useState<TypeError>({});

  const dispatch = useDispatch();

  const registerPromise = register(inputs.name, inputs.numberPhone, inputs.sex, inputs.national, inputs.email, inputs.password, inputs.comfirmPass);
  // use userRegister from store redux
  const userRegister = useSelector((state: StateStoreRegis) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  const router = useRouter();
  const { pathname, query } = router;
  const location = useRouter();
  const navigate = useRouter();
  const redirect = location.query ? router.query.redirect : "/";;


  // Xử lý chuyển trang khi đã đăng nhập
  useEffect(() => {
    if (userInfo) {
      // navigate(redirect + "login");
    }
  }, [userInfo, navigate, redirect])


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameInput = e.target.name;
    let valueInput = e.target.value;

    setInputs(state => ({ ...state, [nameInput]: valueInput })) // 
  }

  const handleSelectChange = (e: SelectChangeEvent) => {
    const nameInput = e.target.name;
    let valueInput = e.target.value;

    setInputs(state => ({ ...state, [nameInput]: valueInput })) // 
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let errorSubmit: ErrorSubmit = {};
    let flag = true;
    let checkError = false;

    // validate name and sex
    if (inputs.name === undefined || inputs.name === '') {
      errorSubmit.name = "Vui lòng nhập tên của bạn !";
      setErrors(errorSubmit);
      checkError = false;
    }
    else if (inputs.sex === undefined || inputs.sex === '') {
      errorSubmit.sex = "Vui lòng nhập giới tính của bạn !";
      setErrors(errorSubmit);
      checkError = false;
    } else {
      setErrors(errorSubmit);
      checkError = true;
    }

    // validate numberPhone
    if (inputs.numberPhone === undefined || inputs.numberPhone === '') {
      errorSubmit.numberPhone = "Vui lòng nhập số điện thoại!";
      setErrors(errorSubmit);
      checkError = false;
    } else {
      setErrors(errorSubmit);
      checkError = true;
    }

    // validate national
    if (inputs.national === undefined || inputs.national === '') {
      errorSubmit.national = "Vui lòng nhập nơi ở hiện tại !";
      setErrors(errorSubmit);
      checkError = false;
    } else {
      setErrors(errorSubmit);
      checkError = true;
    }

    // validate email
    if (inputs.email === undefined || inputs.email === '') {
      errorSubmit.email = "Vui lòng nhập email !";
      setErrors(errorSubmit);
      checkError = false;
    } else {
      setErrors(errorSubmit);
      checkError = true;
    }

    // validate password
    if (inputs.password === undefined || inputs.password === '') {
      errorSubmit.password = "Vui lòng nhập mật khẩu !";
      setErrors(errorSubmit);
      checkError = false;
    } else {
      setErrors(errorSubmit);
      checkError = true;
    }

    // validate comfirm password
    if (inputs.comfirmPass === undefined || inputs.comfirmPass === '') {
      errorSubmit.comfirmPass = "Vui lòng nhập lại mật khẩu !";
      setErrors(errorSubmit);
      checkError = false;
    } else if (inputs.comfirmPass !== inputs.password) {
      alert("Nhập lại mật khẩu không khớp nhau!");
      checkError = false;
    } else if (inputs.comfirmPass === inputs.password) {
      checkError = true;
    } else {
      setErrors(errorSubmit);
      checkError = true;
    }


    if (checkError) {
      // alert("Điền Thông tin thành công!");
      registerPromise(dispatch);

    } else {
      alert("Bạn phải nhập đúng thông tin!")
    }

  }

  return (
    <div style={{ paddingTop: "80px", height: "1200px" }} className={styles.body_form}>
      {loading && <BackdropProgressLoading />}
      <div style={{ padding: '10px', height: '1200px' }} className='backdrop'>
        {
          error ?
            <>
              <ErrorAlert messageError={`${error}`} />
            </> : <p style={{ marginTop: '70px' }}></p>
        }
        <div className={styles.wrap_form}>
          <div style={{ color: '#BF014B' }} className={styles.title}>ĐĂNG KÝ</div>
          <div className={styles.content}>
            <form onSubmit={handleSubmit}>
              <div className={styles.user_details}>
                <div style={{ justifyContent: 'space-between', flexWrap: 'wrap', width: '100%' }}>
                  <div style={{ width: '100%' }} className={styles.input_box}>
                    <span className={styles.details}>Tên :</span>
                    <input onChange={handleInputChange}
                      name="name"
                      type="text"
                      placeholder="Nhập tên của bạn"
                    />
                  </div>
                  {errors.name === '' || errors.name === undefined ? <p style={{ margin: '0', height: '30px' }}></p> : <p style={{ color: "#D93025", textAlign: 'start', marginBottom: '8px', fontSize: '14px' }}>{errors.name}</p>}

                  <FormControl sx={{ minWidth: "100%" }} size="medium">
                    <InputLabel id="demo-select-small">Giới tính</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      name="sex"
                      label="Giới tính"
                      onChange={handleSelectChange}
                    >
                      <MenuItem value=''>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'Nam'}>Nam</MenuItem>
                      <MenuItem value={'Nữ'}>Nữ</MenuItem>
                      <MenuItem value={'Khác'}>Khác</MenuItem>
                    </Select>
                    {errors.sex === '' || errors.sex === undefined ? <p style={{ margin: '0', height: '30px' }}></p> : <p style={{ color: "#D93025", textAlign: 'start', marginBottom: '8px', fontSize: '14px' }}>{errors.sex}</p>}
                  </FormControl>
                </div>


                <div className={styles.input_box}>
                  <span className={styles.details}>Số điện thoại</span>
                  <input onChange={handleInputChange}
                    name="numberPhone"
                    type="number"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
                {errors.numberPhone === '' || errors.numberPhone === undefined ? <p style={{ margin: '0', height: '30px' }}></p> : <p style={{ color: "#D93025", textAlign: 'start', marginBottom: '8px', fontSize: '14px' }}>{errors.numberPhone}</p>}


                <div className={styles.input_box}>
                  <span className={styles.details}>Quốc tịch</span>
                  <input onChange={handleInputChange}
                    name="national"
                    type="text"
                    placeholder="Bạn đến từ đầu?"
                  />
                </div>
                {errors.national === '' || errors.national === undefined ? <p style={{ margin: '0', height: '30px' }}></p> : <p style={{ color: "#D93025", textAlign: 'start', marginBottom: '8px', fontSize: '14px' }}>{errors.national}</p>}


                <div className={styles.input_box}>
                  <span className={styles.details}>Email</span>
                  <input onChange={handleInputChange}
                    name="email"
                    type="text"
                    placeholder="Enter your username"
                  />
                </div>
                {errors.email === '' || errors.email === undefined ? <p style={{ margin: '0', height: '30px' }}></p> : <p style={{ color: "#D93025", textAlign: 'start', marginBottom: '8px', fontSize: '14px' }}>{errors.email}</p>}

                <div className={styles.input_box}>
                  <span className={styles.details}>Password</span>
                  <input
                    name="password"
                    onChange={handleInputChange}
                    type="password"
                    placeholder="Nhập mật khẩu"
                  />
                </div>
                {errors.password === '' || errors.password === undefined ? <p style={{ margin: '0', height: '30px' }}></p> : <p style={{ color: "#D93025", textAlign: 'start', padding: 0, fontSize: '14px' }}>{errors.password}</p>}


                <div className={styles.input_box}>
                  <span className={styles.details}>comfirm Password</span>
                  <input
                    name="comfirmPass"
                    onChange={handleInputChange}
                    type="password"
                    placeholder="Xác nhận mật khẩu"
                  />
                </div>

              </div>
              {errors.comfirmPass === '' || errors.comfirmPass === undefined ? <p style={{ margin: '0', height: '30px' }}></p> : <p style={{ color: "#D93025", textAlign: 'start', padding: 0, fontSize: '14px' }}>{errors.comfirmPass}</p>}

              <div className={styles.button}>
                <input type="submit" value="ĐĂNG KÝ" />

              </div>
            </form>
          </div>
        </div >
      </div>

    </div >
  )
}
