import { createSlice } from "@reduxjs/toolkit";

const tollinfo = createSlice({
  name: "tollinfo",
  initialState: {
    from: "",
    to: "",
    type: "",
  },
  reducers: {
    update: (state, action) => {
      state.from = action.payload.from;
      state.to = action.payload.to;
      state.type = action.payload.type;

    //   console.log(action);
    },
  },
});

export const { update } = tollinfo.actions;
export default tollinfo.reducer;
