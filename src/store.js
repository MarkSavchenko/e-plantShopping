import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CreateSlice'; // Ensure the file name and path are correct

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
