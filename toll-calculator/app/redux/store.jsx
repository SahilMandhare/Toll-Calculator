import { configureStore } from "@reduxjs/toolkit";
import tollReducer from "./tollinfo";
import tollDetailsData from "./tolldata";

const store = configureStore({
  reducer: {
    tollinfo: tollReducer,
    tolldata: tollDetailsData
  },
});

export default store;
