import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
    data: [],
    status: 'idle',
    error: null
};

const ProductSlice = createSlice({
    name: "product",
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(GetProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(GetProduct.fulfilled, (state, action) => {
                state.status = 'success';
                state.data = action.payload;
            })
            .addCase(GetProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const GetProduct = createAsyncThunk('Products/data', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data,'responce');
    return data;
});


export default ProductSlice.reducer;
