import { configureStore } from '@reduxjs/toolkit';
import valuesReducer from './valuesSlice';

const store = configureStore({
  reducer: {
    values: valuesReducer,
  },
});

export default store;