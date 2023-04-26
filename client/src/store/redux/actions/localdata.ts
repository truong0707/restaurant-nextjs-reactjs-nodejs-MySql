import { Dispatch } from "redux";
import { GET_DATA_USER_LOCAL_STORAGE } from "../constants/localData";

// get data storage
// export function getDataUserLocal() {
//     return (
//         async (dispatch: Dispatch) => {
//             try {
//                 // let cc = localStorage.getItem("userInfo");
//                 // dispatch({ type: GET_DATA_USER_LOCAL_STORAGE, payload: cc });

//                 // console.log("chạy ok", cc)
            
//             } catch (error: any) {
//                 console.log("lỗi")
//                 // dispatch({
//                 //     type: PRODUCT_LIST_FAIL,
//                 //     payload: error.response.data.message ? error.response.data.message : error.message,
//                 // })
//             }
//         }
//     )
// }