import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import userReducer from "../redux/features/user/userSlice";
// import authReducer from "../features/auth";
// import storage from "redux-persist/lib/storage";
// import { persistStore, persistReducer } from "redux-persist";
// import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

// const persistCommonConfig = {
//   //   storage: storage,
// };

// const userPersistConfig = {
//   ...persistCommonConfig,
//   key: "auth",
//   whitelist: ["isAuthenticated", "user"] /*  cái này là cái muốn lấy */,
//   stateReconciler: autoMergeLevel2,
// };

/*  */
// const favoriteCouresPersistConfig = {
//   ...persistCommonConfig,
//   key: "coursesFavorite",
//   whitelist: ["listCoursesFavorite"],
//   stateReconciler: autoMergeLevel2,
// };

/* cart */
// const cartPersistConfig = {
//   ...persistCommonConfig,
//   key: "cart",
//   whitelist: ["listItemsCarts"],
//   stateReconciler: autoMergeLevel2,
// };

export const rootReducer = combineReducers({
  users: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
