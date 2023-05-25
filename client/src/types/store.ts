import store from "@/store/redux/Store";

export type RootState = ReturnType<typeof store.getState>;