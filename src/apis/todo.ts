import http from '../services/http';

export enum TODO_URL {
  URL_TODOS = '/comments',
}

const todoApis = {
  todoList: () => http.get(TODO_URL.URL_TODOS),
};

export default todoApis;
