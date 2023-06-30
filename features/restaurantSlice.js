import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: {
    id: null,
    featured_id: null,
    title: null,
    image_url: null,
    address: null,
    rating: null,
    genre: null,
    short_description: null,
    dishes: null,
    long: null,
    lat: null,
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
