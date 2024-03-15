import { combineReducers } from '@reduxjs/toolkit';
import todoSlice from './todoSlice';
import appSlice from './appSlice';

const rootReducer = combineReducers({
  todo: todoSlice,
  app: appSlice
});

export default rootReducer;
