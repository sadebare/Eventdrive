import { configureStore } from "@reduxjs/toolkit";
import functionalitiesReducer from './features/functionalities/functionalitiesSlice';
import userReducer from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    functionalities: functionalitiesReducer,
    user: userReducer
  }
})