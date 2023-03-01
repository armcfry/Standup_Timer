import { createSlice } from '@reduxjs/toolkit';

export const valuesSlice = createSlice({
  name: 'values',
  initialState: {
    duration_value: "10:00",
    attendees_value: 5,
  },
  reducers: {
    set_duration_value: (state, action) => {
      state.duration_value = action.payload;
    },
    set_attendees_value: (state, action) => {
      state.attendees_value = action.payload;
    },
    resetValues: (state) => {
        console.log("Resetting the values")
        state.duration_value = "10:00";
        state.attendees_value = 5;
    },
  },
});

export const { set_duration_value, set_attendees_value, resetValues } = valuesSlice.actions;

export default valuesSlice.reducer;