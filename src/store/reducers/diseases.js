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

export const getHistoricalData = createAsyncThunk(
  "diseases/getHistoricalData",
  async (diseaseName) => {
    const response = await disease.get(
      `/${diseaseName}/historical/all?lastdays=500`
    );
    return response.data;
  }
);

const diseasesSlice = createSlice({
  name: "diseases",
  initialState: {
    diseaseName: "covid-19",
    countries: [],
    countryInfo: {},
    historical: [],
  },
  extraReducers: {
    [getCountries.fulfilled]: (state, action) => {
      state.countries = action.payload;
    },
    [getCountryInfo.fulfilled]: (state, action) => {
      state.countryInfo = action.payload;
    },
    [getHistoricalData.fulfilled]: (state, action) => {
      state.historical = action.payload;
    },
  },
});

export default diseasesSlice.reducer;
