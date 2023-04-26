import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router"
import { login } from '../../store/redux/actions/userActions';
import ErrorAlert from '@/components/Alert/ErrorAlert';
import BackdropProgressLoading from '@/components/BackdropProgressLoading/BackdropProgressLoading';
import styles from '@/styles/styleComponent/loginAndRegis.module.css'


export interface StateStore {
  userLogin: {
    loading: boolean;
    userInfo: {
      isAdmin: boolean;
      name?: string;
    };
    error: boolean;
  };
}

export interface TypeObjectInput {
  name?: string,
  sex?: any,
  national?: string,
  email?: string,
  password?: string,
  comfirmPass?: string,
  numberPhone?: string
}

export interface ErrorSubmit {
  name?: string,
  sex?: string,
  national?: string,
  numberPhone?: string,
  email?: string,
  password?: string,
  comfirmPass?: string,
}

export interface TypeError {
  name?: string,
  sex?: string,
  national?: string,
  email?: string,
  password?: string,
  comfirmPass?: string,
  checkcomfirmPass?: boolean,
  numberPhone?: string;
}

export default function Login() {
  const [inputs, setInputs] = useState<TypeObjectInput>({});
  const [errors, setErrors] = useState<TypeError>({});

  const dispatch = useDispatch();

  const router = useRouter();
  const { pathname, query } = router;
  const location = useRouter();
  const redirect = location.query ? router.query.redirect : "/";
  console.log(redirect, "pa")
  // const navigate = useNavigate();
  // const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state: StateStore) => state.userLogin); // lấy dữ liệu từ store
  const { error, loading, userInfo } = userLogin;

  // Xử lý chuyển trang khi đã đăng nhập
  useEffect(() => {
    // if (userInfo) {
    //     navigate(redirect)
    // }

    if (userInfo) {
      // navigate('/');
    }
  }, [userInfo, /* navigate */, /* redirect */])


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameInput = e.target.name;
    let valueInput = e.target.value;

    setInputs(state => ({ ...state, [nameInput]: valueInput })) // 
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let errorSubmit: ErrorSubmit = {
      numberPhone: ''
    };
    // let flag = true;
    let check = false;

    // validate email
    if (inputs.email === undefined || inputs.email === '') {
      errorSubmit.email = "Bạn vui lòng nhập email của mình !";
      setErrors(errorSubmit);
      check = false;
    } else {
      setErrors(errorSubmit);
      check = true;
    }

    // validate password
    if (inputs.password === undefined || inputs.password === '') {
      errorSubmit.password = "Bạn vui lòng nhập password của mình !";
      setErrors(errorSubmit);
      check = false;
    } else {
      setErrors(errorSubmit);
      check = true;
    }

    const loginPromise = login(inputs.email, inputs.password);
    if (check) {
      loginPromise(dispatch);
      // dispatch(login(email, password)) => lỗi

    } else {
      alert('đăng nhập thất bại !')
    }
  }

  return (
    <>
      <div style={{ paddingTop: "80px" }} className={styles.body_form}>
        {loading && <BackdropProgressLoading />}
        <div style={{ padding: '10px', height: '100%' }} className='backdrop'>
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
                    <span className={styles.details}>User Name</span>
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
              </form>
            </div>
          </div >
        </div>
      </div >
    </>
  )
}