import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import rootReducer from './slices/rootReducer';
import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from 'react-redux';

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(sagaMiddleware),
  devTools: __DEV__,
});

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);
const { dispatch } = store;

const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;
const useDispatch = () => useAppDispatch<AppDispatch>();

export { store, persistor, dispatch, useSelector, useDispatch };
