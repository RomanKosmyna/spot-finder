import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IState {
  toggleBurgerMenu: boolean;
  toggleAddVenue: boolean;
  toggleThemeMode: boolean;
}

const initialState: IState = {
  toggleBurgerMenu: false,
  toggleAddVenue: false,
  toggleThemeMode: true,
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
    },
    toggleThemeMode: (state: IState, action: PayloadAction<boolean>) => {
      state.toggleThemeMode = action.payload;
    },
  },
});

const { reducer: toggleReducer, actions: { toggleBurgerMenu, toggleAddVenue, toggleThemeMode } } = toggleSlice;

const toggleActions = {
  toggleBurgerMenu,
  toggleAddVenue,
  toggleThemeMode,
};

export { toggleReducer, toggleActions };