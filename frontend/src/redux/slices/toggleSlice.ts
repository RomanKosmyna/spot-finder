import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IState {
  toggleBurgerMenu: boolean;
  toggleAddVenue: boolean;
}

const initialState: IState = {
  toggleBurgerMenu: false,
  toggleAddVenue: false
};

const toggleSlice = createSlice({
  name: "toggleSlice",
  initialState,
  reducers: {
    toggleBurgerMenu: (state: IState, action: PayloadAction<boolean>) => {
      state.toggleBurgerMenu = action.payload;
    },
    toggleAddVenue: (state: IState, action: PayloadAction<boolean>) => {
      state.toggleAddVenue = action.payload;
    }
  }
});

const {reducer: toggleReducer, actions: {toggleBurgerMenu, toggleAddVenue}} = toggleSlice;

const toggleActions = {
  toggleBurgerMenu,
  toggleAddVenue
};

export { toggleReducer, toggleActions};