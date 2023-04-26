import { GET_DATA_USER_LOCAL_STORAGE } from "../constants/localData";

// product list reducer
export const getDataReducer = (state = { userInfoLocal: null }, action: any) => {
    switch (action.type) {
        case GET_DATA_USER_LOCAL_STORAGE:
            return { ...state, userInfoLocal: action.payload};
        default:
            return state
    }
}