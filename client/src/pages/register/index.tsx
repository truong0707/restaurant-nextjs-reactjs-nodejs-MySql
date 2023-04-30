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

  // use userRegister from store redux
  const userRegister = useSelector((state: StateStoreRegis) => state.userRegister);
  const { error, loading, userInfo } = userRegister;
  const [msgGeneralErrValidate, setMsgGeneralErrValidate] = useState<{ msgGeneral?: string }>({});

  const router = useRouter();
  // const { pathname, query } = router;


  // Xử lý chuyển trang khi đã đăng nhập
  useEffect(() => {
    if (userInfo) {
      router.push('/')
    }
  }, [userInfo])


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameInput = e.target.name;
    let valueInput = e.target.value;

    console.log(inputs, "inputs");
    console.log(errors, "errors");

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
    let checkName = false;
    let checkEmail = false;
    let checkPass = false;
    let checkconfirmPass = false;
    let checkRole = false;

    /* validate name */
    if (inputs.name === undefined || inputs.name === '') {
      errorSubmit.name = "Vui lòng nhập tên của bạn !";
      setErrors(errorSubmit);
      checkName = false;
    } else {
      checkName = true;
    }

    /* validate email */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const checkEmailFormat = emailRegex.test(`${inputs.email}`);

    if (inputs.email === undefined || inputs.email === "") {
      errorSubmit.email = "Xin hãy điên email!";
      setErrors(errorSubmit);
      checkEmail = false;
    } else if (!checkEmailFormat) {
      errorSubmit.email = "Email không đúng định dạng!";
      setErrors(errorSubmit);
      checkEmail = false;
    } else {
      setErrors(errorSubmit);
      checkEmail = true;
    }

    /* validate password */
    if (inputs.password === undefined || inputs.password === '') {
      errorSubmit.password = "Vui lòng nhập mật khẩu !";
      setErrors(errorSubmit);
      checkPass = false;
    } else {
      setErrors(errorSubmit);
      checkPass = true;
    }

    /*  validate comfirm password */
    if (inputs.confirmPass === undefined || inputs.confirmPass === '') {
      errorSubmit.confirmPass = "Vui lòng nhập lại mật khẩu !";
      setErrors(errorSubmit);
      checkconfirmPass = false;
    } else if (inputs.confirmPass !== inputs.password) {
      checkconfirmPass = false;
      errorSubmit.confirmPass = "Có vẻ như mật khẩu và nhập lại mật khẩu không khớp !";
    } else if (inputs.confirmPass === inputs.password) {
      checkconfirmPass = true;
    } else {
      setErrors(errorSubmit);
      checkconfirmPass = true;
    }

     /* validate role */
     if (inputs.role === undefined || inputs.role === '') {
      errorSubmit.role = "Vui lòng nhập mật khẩu !";
      setErrors(errorSubmit);
      checkRole = false;
    } else {
      setErrors(errorSubmit);
      checkRole = true;
    }
  
    const registerPromise = register(inputs.name, inputs.role, inputs.email, inputs.password, inputs.confirmPass);

    if (checkName && checkEmail && checkPass && checkconfirmPass) {
      setMsgGeneralErrValidate({})
      registerPromise(dispatch);
    } else {
      setMsgGeneralErrValidate({
        msgGeneral: "Bạn phải nhập tất cả thông tin để đăng ký!"
      })
    }
  }

  return (
    <div style={{ paddingTop: "0px", height: "900px" }} className={styles.body_form}>
      {loading && <BackdropProgressLoading />}
      <div style={{ padding: '10px', height: '900px' }} className='backdrop'>
        {
          error ?
            <>
              <ErrorAlert messageError={`${error}`} />
            </> : null
        }
        {
          msgGeneralErrValidate.msgGeneral ? <ErrorAlert messageError={`${msgGeneralErrValidate.msgGeneral}`} /> : null
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
                  {errors.name === '' || errors.name === undefined ? null : <p style={{ color: "#D93025", textAlign: 'start', marginBottom: '8px', fontSize: '14px' }}>{errors.name}</p>}
                </div>

                <div className={styles.input_box}>
                  <span className={styles.details}>Email</span>
                  <input onChange={handleInputChange}
                    name="email"
                    type="text"
                    placeholder="Enter your username"
                  />
                </div>
                {errors.email === '' || errors.email === undefined ? null : <p style={{ color: "#D93025", textAlign: 'start', marginBottom: '8px', fontSize: '14px' }}>{errors.email}</p>}

                <div className={styles.input_box}>
                  <span className={styles.details}>Password</span>
                  <input
                    name="password"
                    onChange={handleInputChange}
                    type="password"
                    placeholder="Nhập mật khẩu"
                  />
                </div>
                {errors.password === '' || errors.password === undefined ? null : <p style={{ color: "#D93025", textAlign: 'start', padding: 0, fontSize: '14px' }}>{errors.password}</p>}


                <div className={styles.input_box}>
                  <span className={styles.details}>comfirm Password</span>
                  <input
                    name="confirmPass"
                    onChange={handleInputChange}
                    type="password"
                    placeholder="Xác nhận mật khẩu"
                  />
                </div>
                {errors.confirmPass === '' || errors.confirmPass === undefined ? <p style={{ margin: '0', height: '100px' }}></p> : <p style={{ color: "#D93025", textAlign: 'start', padding: 0, fontSize: '14px' }}>{errors.confirmPass}</p>}

                <FormControl sx={{ minWidth: "100%" }} size="small">
                  <InputLabel id="demo-select-small">bạn tới đây với vai trò là gì?</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    name="role"
                    label="Bạn tới đây với vai trò là gì?"
                    onChange={handleSelectChange}
                    size='small'
                  >
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={2}>Đầu bếp</MenuItem>
                    <MenuItem value={3}>Khách hàng</MenuItem>
                  </Select>
                  {errors.role === '' || errors.role === undefined ? <p style={{ margin: '0', height: '30px' }}></p> : <p style={{ color: "#D93025", textAlign: 'start', marginBottom: '8px', fontSize: '14px' }}>{errors.role}</p>}
                </FormControl>
              </div>


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
