import { configureStore } from "@reduxjs/toolkit";
import functionalitiesReducer from './features/functionalities/functionalitiesSlice';
import userReducer from './features/user/userSlice';
import venuesReducer from './features/venues/venuesSlice';
import vendorsReducer from "./features/vendors/vendorsSlice";

export const store = configureStore({
  reducer: {
    functionalities: functionalitiesReducer,
    user: userReducer,
    venues: venuesReducer,
    vendors: vendorsReducer
  }
})