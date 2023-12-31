import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => +item.id === +action.payload.id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as it's not in the basket!`
        );
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

const selectBasket = (state) => state.basket;

export const selectBasketItems = createSelector(
  [selectBasket],
  (basket) => basket.items
);

export const selectBasketItemsWithId = createSelector(
  [selectBasketItems, (_state, id) =>id],
  (items, id) => {
    return items.filter((item) => item.id === id);
  }
);

export const selectBasketTotal = createSelector([selectBasketItems], (items) =>
  items.reduce((total, item) => total + item.price, 0)
);

export default basketSlice.reducer;
