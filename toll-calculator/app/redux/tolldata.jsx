import { createSlice } from "@reduxjs/toolkit";

const tolldata = createSlice({
  name: "tolldata",
  initialState: {
    data: null,
  },
  reducers: {
    detailsData: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const { detailsData } = tolldata.actions;
export default tolldata.reducer;
