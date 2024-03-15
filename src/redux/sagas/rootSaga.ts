import { fork } from 'redux-saga/effects';
import todoSaga from './todoSaga';

export default function* rootSaga() {
  yield fork(todoSaga);
}
