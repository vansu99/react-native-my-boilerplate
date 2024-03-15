import { AxiosResponse } from 'axios';
import todoApis from '../../apis/todo';
import { call, put, takeLatest } from 'redux-saga/effects';
import { setTodoList } from '../slices/todoSlice';
import { TODO_ACTIONS } from '../../constants/actions/todo';

function* getTodoList() {
  try {
    const response: AxiosResponse<any> = yield call(todoApis.todoList);
    yield put(setTodoList(response.data));
  } catch (error) {
    return error;
  }
}

export default function* todoSaga() {
  yield takeLatest(TODO_ACTIONS.GET_TODO_LIST, getTodoList);
}
