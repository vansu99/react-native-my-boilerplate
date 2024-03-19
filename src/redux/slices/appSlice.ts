import { createSlice } from '@reduxjs/toolkit';

type InitialStateTypes = {
  networkState: boolean;
  lang: 'en' | 'ja';
};

const initialState = {
  networkState: false,
  lang: 'en',
} as InitialStateTypes;

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setNetworkState(state, action) {
      state.networkState = action.payload;
    },
    setLanguage(state, action) {
      state.lang = action.payload;
    },
  },
});

// reducer
export default slice.reducer;

// actions
export const { setLanguage, setNetworkState } = slice.actions;
