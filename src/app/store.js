import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'
import themeReducer from '../features/theme/themeSlice'

export const store = configureStore({
  reducer: {
    // This counter is used to change the state
    counter: counterReducer,
    theme: themeReducer
  },
});
