import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMockData } from "../mock";
import { Product } from "model";

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export const fetchProduct = createAsyncThunk<Product[]>(
  "product/fetchProduct",
  async () => {
    const data = await getMockData();

    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [] as Product[],
    loading: false,
    error: null,
  } as ProductState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchProduct.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
      }
    );
    builder.addCase(fetchProduct.rejected, (state) => {
      state.loading = false;
      state.error = "Ошибка загрузки продуктов";
    });
  },
  selectors: {
    getProducts: (state) => state.products,
    getLoading: (state) => state.loading,
    getError: (state) => state.error,
  },
});

export const { getProducts, getLoading, getError } = productSlice.selectors;

export default productSlice.reducer;
