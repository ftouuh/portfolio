import { createSlice } from '@reduxjs/toolkit';

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    value: localStorage.getItem('darkMode') === 'true',
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.value = !state.value;
      localStorage.setItem('darkMode', state.value.toString());
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export const selectDarkMode = (state) => state.darkMode.value;

export default darkModeSlice.reducer;
