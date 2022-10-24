import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import disease from "../../apis/disease";

export const getCountries = createAsyncThunk(
  "diseases/getCountries",
  async (diseaseName) => {
    const response = await disease.get(`/${diseaseName}/countries`);
    return response.data;
  }
);

export const getCountryInfo = createAsyncThunk(
  "diseases/getCountryInfo",
  async ({ diseaseName, countryCode }) => {
    const response = await disease.get(`/${diseaseName}/${countryCode}`);
    return response.data;
  }
);

const diseasesSlice = createSlice({
  name: "diseases",
  initialState: {
    diseaseName: "covid-19",
    countries: [],
    countryInfo: {},
    countryCode: "",
  },
  extraReducers: {
    [getCountries.fulfilled]: (state, action) => {
      state.countries = action.payload;
    },
    [getCountryInfo.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.countryInfo = action.payload;
    },
  },
});

export default diseasesSlice.reducer;
