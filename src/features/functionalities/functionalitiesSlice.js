import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  modalTitle: '',
  modalSub: ''
}

const functionalitiesSlice = createSlice({
  name: 'functionalities',
  initialState,
  reducers: {
    toggler: (state, action) => {
      state.isOpen = !state.isOpen;
      state.modalTitle = action.payload.modalTitle;
      state.modalSub = action.payload.modalSub;
    }
  }
});

export const { toggler } = functionalitiesSlice.actions;

export default functionalitiesSlice.reducer;