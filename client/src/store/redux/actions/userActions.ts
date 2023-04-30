// * theo như redux action là 1 ojb nhưng khi ta sử dụng redux-thunk ta có thể --> function
import axios from "axios";
import {
  UserDispatchTypes,
  USER_LOGIN_FAIL,
  USER_LOGIN_RESQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../constants/UserContants";
import {
  USER_REGISTER_RESQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../constants/UserContants";
import { Dispatch } from "redux";

// Login
export function login(email?: string, password?: string) {
  return async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
      dispatch({ type: USER_LOGIN_RESQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // call api
      const { data } = await axios.post(
        `https://restaurant-truongit.onrender.com/api/v1/user/login`,
        {
          email,
          password,
        },
        config
      );

      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

      /// save localStorage
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error: any) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : "server của chúng tôi có sự cố, hãy quay lại sau :((",
      });
    }
  };
}

// logout
export const logout = () => (dispatch: Dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
  document.location.href = "/login";
  alert("Tạm biệt bạn, hẹn gặp bạn vào 1 ngày đẹp trời");
};

// register
export const register =
  (
    name?: string,
    role?: string,
    email?: string,
    password?: string,
    confirmPass?: string
  ) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_RESQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // call api
      const { data } = await axios.post(
        `https://restaurant-truongit.onrender.com/api/v1/user/register`,
        { name, email, password, confirmPass, role },
        config
      );
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

      console.log(data, "data");

      /// save localStorage
      localStorage.setItem("userInfo", JSON.stringify(data));
      alert(
        "Chào mừng bạn đã đến với trang web của tôi, để chỉnh sửa profile, bạn click vào avata hoặc tên của minh !"
      );
    } catch (error: any) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
