/* Login  */
export const USER_LOGIN_RESQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const USER_LOGOUT = "USER_LOGOUT";

/* Register */
export const USER_REGISTER_RESQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";



// Login
interface UserLoginResquest {
    type: typeof USER_LOGIN_RESQUEST
}

interface UserLoginSuccess {
    type: typeof USER_LOGIN_SUCCESS
    payload: {
        email: string,
        password: string
    }   
}

interface UserLoginFail {
    type: typeof USER_LOGIN_FAIL
}

interface UserLogout {
    type: typeof USER_LOGOUT
}

// Register
interface UserRegisterResquest {
    type: typeof USER_REGISTER_RESQUEST
}

interface UserRegisterSuccess {
    type: typeof USER_REGISTER_SUCCESS
    payload: {
        email: string,
        password: string
    }   
}

interface UserRegisterFail {
    type: typeof USER_REGISTER_FAIL
}


export type UserDispatchTypes = UserLoginResquest | UserLoginSuccess | UserLoginFail | UserLogout;
export type UserRegisterDispatchTypes = UserRegisterResquest | UserRegisterSuccess | UserRegisterFail;


