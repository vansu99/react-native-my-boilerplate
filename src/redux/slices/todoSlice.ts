import type { TodoTypes } from '@/types/todo';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialStateTypes = {
  list: TodoTypes[];
};

const initialState = {
  list: [],
} as InitialStateTypes;

const slice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodoList(state, action: PayloadAction<InitialStateTypes['list']>) {
      state.list = action.payload || [];
    },
  },
});

// reducer
export default slice.reducer;

// actions
export const { setTodoList } = slice.actions;
