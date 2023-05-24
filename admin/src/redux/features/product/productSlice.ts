import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import productServices from "../../../services/product";

interface productState {
  dataProduct: any;
  isLoading: Boolean;
  error: Boolean;
  messageError: any;
}

/* State */
const initialState: productState = {
  dataProduct: null,

  /* get All User */
  isLoading: false,
  error: false,
  messageError: null,
};

/* Actions */ 
export const getDataProduct: any = createAsyncThunk(
  "product/getDataProduct",
  async ({ /* params, */ role }: any, { rejectWithValue }) => {
    try {
      const { data } = await productServices.getProductApi("ALL", role);
      
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    getDataProducts: (state, action: PayloadAction<productState[]>) => {
      // state.dataUserTeacher = action.payload;
    },
  },
  extraReducers: {
    [getDataProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [getDataProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;

      state.messageError = action.payload.message;
    },
    [getDataProduct.fulfilled]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        dataProduct: action.payload.data,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { getDataProducts } = productSlice.actions;

export default productSlice.reducer;
