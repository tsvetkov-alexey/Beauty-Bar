import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    likedItems: [],
    searchValue: '',
    likedCount: 0,
    cartCount: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
        setLikedItems(state, action) {
            state.likedItems = action.payload;
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
        setLikedCount(state, action) {
            state.likedCount = action.payload;
        },
        setCartCount(state, action) {
            state.cartCount = action.payload;
        },
    },
});

export const { setItems, setSearchValue, setLikedCount, setCartCount, setLikedItems } =
    cartSlice.actions;
export default cartSlice.reducer;
