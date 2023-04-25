import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import { productDetailReducer, productListHomeReducer, productListReducer } from "./reducers/ProductReducer";
import { userLoginReduder, userRegisterReducer } from "./redux/reducers/userReducer";
// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';


const reducer = combineReducers({
    userLogin: userLoginReduder,
    userRegister: userRegisterReducer,
    // productList: productListReducer,
    // productDetail: productDetailReducer,
    // productListHome: productListHomeReducer,
})

const middleware = [thunk];


// check Local LocalStorage --> initState
// const userInfoFromLocalStorage = localStorage.getItem("userInfo")
//     ? JSON.parse(localStorage.getItem("userInfo") || '{}')
//     : null;

const initalState = {
    userLogin: { userInfo: /* userInfoFromLocalStorage */[] },
};


// create store
const store = createStore(reducer, initalState, composeWithDevTools(applyMiddleware(...middleware)));
export default store;




// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch

// // Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch: () => AppDispatch = useDispatch
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector