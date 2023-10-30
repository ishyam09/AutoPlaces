import { createSlice } from '@reduxjs/toolkit';

const placesSlice = createSlice({
  name: 'places',
  initialState: {
    center: { lat: 0, lng: 0 },
    zoom: 15,
    markers: [],
    places: [],
    loading: false,
    error: null
  },
  reducers: {
    fetchPlacesStart: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    fetchPlacesSuccess: (state, action) => {
      state.places = action.payload;
      state.loading = false;
    },
    fetchPlacesFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    fetchPlaceDetailsStart: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    fetchPlaceDetailsSuccess: (state, action) => {
      state.center = action.payload;
      state.markers = [action.payload];
      state.loading = false;
    },
    fetchPlaceDetailsFailure: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    emptyPlacesResults: (state, action) => {
      state.places = [];
    },
  }
});

export const {
  fetchPlacesStart,
  fetchPlacesSuccess,
  fetchPlacesFailure,
  fetchPlaceDetailsStart,
  fetchPlaceDetailsSuccess,
  fetchPlaceDetailsFailure,
  emptyPlacesResults
} = placesSlice.actions;

export default placesSlice.reducer;
