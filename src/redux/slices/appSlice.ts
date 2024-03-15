import { createSlice } from '@reduxjs/toolkit';

type InitialStateTypes = {
  networkState: boolean;
};

const initialState = {
  networkState: false,
} as InitialStateTypes;

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setNetworkState(state, action) {
      state.networkState = action.payload;
    },
  },
});

// reducer
export default slice.reducer;

// actions
export const { setNetworkState } = slice.actions;
