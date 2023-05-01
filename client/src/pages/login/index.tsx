import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router"
import { login } from '../../store/redux/actions/userActions';
import ErrorAlert from '@/components/Alert/ErrorAlert';
import BackdropProgressLoading from '@/components/BackdropProgressLoading/BackdropProgressLoading';
import styles from '@/styles/styleComponent/loginAndRegis.module.css'
import Link from 'next/link';
import { checkRole } from '@/utils/CheckRole';


export interface StateStore {
  useDataLocal: any;
  userLogin: {
    loading: boolean;
    userInfo: {
      data: {
        token: any
      };
    };
    error: boolean;
  };
  userRegister: {
    loading: boolean,
    userInfo: {
      data: {
        token: any
      };
    };
    error: boolean,
  }
}

export interface TypeObjectInput {
  name?: string,
  role?: string,
  email?: string,
  password?: string,
  confirmPass?: string,
}

export interface ErrorSubmit {
  name?: string,
  role?: string,
  email?: string,
  password?: string,
  confirmPass?: string,
}

export interface TypeError {
  name?: string,
  role?: string,
  email?: string,
  password?: string,
  confirmPass?: string,
}

export default function Login() {
  const [inputs, setInputs] = useState<TypeObjectInput>({});
  const [errors, setErrors] = useState<TypeError>({});
  const dispatch = useDispatch();
  const router = useRouter();
  const userLogin = useSelector((state: StateStore) => state.userLogin); // lấy dữ liệu từ store
  const { error, loading, userInfo } = userLogin;



  // Xử lý chuyển trang khi đã đăng nhập
  useEffect(() => {
    if (userInfo) {
      const role = checkRole(userLogin.userInfo.data.token);

      if (role === 'admin') {
        router.replace('https://restaurant-admin-truongit.vercel.app/admin');
        // router.replace('https://restaurant-admin-truongit.vercel.app/admin');
      } else {
        router.push('/');
      }
    }
  }, [userInfo, /* navigate */, /* redirect */])


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameInput = e.target.name;
    let valueInput = e.target.value;

    setInputs(state => ({ ...state, [nameInput]: valueInput })) // 
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let errorSubmit: ErrorSubmit = {};

    let checkEmail = false;
    let checkPass = false;

    /* validate email */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const checkEmailFormat = emailRegex.test(`${inputs.email}`);

    if (inputs.email === undefined || inputs.email === "") {
      errorSubmit.email = "Please enter your email!";
      setErrors(errorSubmit);
      checkEmail = false;
    } else if (!checkEmailFormat) {
      errorSubmit.email = "Email is not in the correct format!";
      setErrors(errorSubmit);
      checkEmail = false;
    } else {
      setErrors(errorSubmit);
      checkEmail = true;
    }

    /* validate password */
    if (inputs.password === undefined || inputs.password === "") {
      errorSubmit.password = "Please enter your password!";
      setErrors(errorSubmit);
      checkPass = false;
    } else {
      setErrors(errorSubmit);
      checkPass = true;
    }

    const loginPromise = login(inputs.email, inputs.password);

    if (checkEmail && checkPass) {
      loginPromise(dispatch);
      // dispatch(login(email, password)) => lỗi

    } else {
      alert('Đăng nhập thất bại !')
    }
  }

  return (
    <>
      <div style={{ paddingTop: "80px", height: '700px' }} className={styles.body_form}>
        {loading && <BackdropProgressLoading />}
        <div style={{ padding: '10px', height: '700px' }} className={styles.backdrop}>
          {
            error ?
              <>
                <ErrorAlert messageError={`${error}`} />
              </> : <p style={{ marginTop: '110px' }}></p>
          }
          <div className={styles.wrap_form}>
            <div style={{ color: '#BF014B' }} className={styles.title}>ĐĂNG NHẬP</div>
            <div className={styles.content}>
              <form onSubmit={handleSubmit}>
                <div className={styles.user_details}>
                  <div className={styles.input_box}>
                    <span className={styles.details}>Email:</span>
                    <input onChange={handleInputChange}
                      name="email"
                      type="text"
                      placeholder="Enter your username"
                    />
                  </div>
                  {errors.email === '' || errors.email === undefined ? <p style={{ margin: '0', height: '30px' }}></p> : <p style={{ color: "#D93025", textAlign: 'start', marginBottom: '8px', fontSize: '14px' }}>{errors.email}</p>}

                  <div className={styles.input_box}>
                    <span className={styles.details}>Password:</span>
                    <input
                      name="password"
                      onChange={handleInputChange}
                      type="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  {errors.password === '' || errors.password === undefined ? <p style={{ margin: '0', height: '30px' }}></p> : <p style={{ color: "#D93025", textAlign: 'start', margin: '7px', fontSize: '14px' }}>{errors.password}</p>}
                </div>

                {/* <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: "200px", background: 'pink', margin: "auto" }} className="gender-details">
                            <p>gg</p>
                            <p>gitthub</p>
                            <p>dsd</p>
                        </div> */}

                <div className={styles.button}>
                  <input type="submit" value="ĐĂNG NHẬP" />
                </div>

                <p style={{ textAlign: 'center' }}>Bạn chưa có tài khoản? <Link href="/register?redirect=/">Đăng ký ngay</Link></p>
              </form>
            </div>
          </div >
        </div>
      </div >
    </>
  )
}