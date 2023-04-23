import { createSlice } from '@reduxjs/toolkit';

export const valuesSlice = createSlice({
  name: 'values',
  initialState: {
    duration_value: "10:00",
    attendees_value: 5,
    speak_time_value: 2,
    overtime: false
  },
  reducers: {
    set_duration_value: (state, action) => {
      state.duration_value = action.payload;
    },
    set_attendees_value: (state, action) => {
      state.attendees_value = action.payload;
    },
    set_speak_time_value: (state, action) => {
      state.speak_time_value = action.payload;
    },
    set_overtime_value: (state, action) => {
      state.overtime_value = action.payload;
    },
    set_pause_value: (state, action) => {
      state.pause_value = action.payload;
    },
    resetValues: (state) => {
        console.log("Resetting the values")
        state.duration_value = "10:00";
        state.attendees_value = 5;
        state.speak_time_value = 2;
        state.overtime_value = false;
        state.pause_value = false;
    },
  },
});

export const { set_duration_value, 
               set_attendees_value, 
               set_speak_time_value, 
               set_overtime_value,
               set_pause_value,
               resetValues } = valuesSlice.actions;

export default valuesSlice.reducer;