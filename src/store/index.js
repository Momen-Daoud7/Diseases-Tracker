import { configureStore } from "@reduxjs/toolkit";
import diseasesReducer from "./reducers/diseases";

const store = configureStore({
  reducer: {
    disease: diseasesReducer,
  },
});

export default store;
