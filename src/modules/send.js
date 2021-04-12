import { takeEvery } from "@redux-saga/core/effects";
import { createAction, handleActions } from "redux-actions";
import * as actionType from "./actionType";
import * as api from "../lib/api";
import createRequestSaga from "../lib/createRequestSaga";
import produce from "immer";

export const insertTodo = createAction(actionType.INSERT_TODO, ({ text }) => ({
  text,
}));
export const deleteTodo = createAction(actionType.DELETE_TODO, (id) => id);
export const updateTodo = createAction(
  actionType.UPDATE_TODO,
  ({ id, done }) => ({ id, done })
);

const insertTodoSaga = createRequestSaga(
  actionType.INSERT_TODO,
  api.insertTodo
);

const deleteTodoSaga = createRequestSaga(
  actionType.DELETE_TODO,
  api.deleteTodo
);

const updateTodoSaga = createRequestSaga(
  actionType.UPDATE_TODO,
  api.updateTodo
);

export function* sendSaga() {
  yield takeEvery(actionType.INSERT_TODO, insertTodoSaga);
  yield takeEvery(actionType.DELETE_TODO, deleteTodoSaga);
  yield takeEvery(actionType.UPDATE_TODO, updateTodoSaga);
}

const initialState = {
  todo: {
    id: null,
    done: false,
    text: "",
    time: null,
  },
};

const send = handleActions(
  {
    [actionType.INSERT_TODO_SUCCESS]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todo = todo;
      }),
    [actionType.DELETE_TODO_SUCCESS]: (state) =>
      produce(state, (draft) => {
        draft.todo = null;
      }),
    [actionType.UPDATE_TODO_SUCCESS]: (state) =>
      produce(state, (draft) => {
        draft.todo.done = !draft.todo.done;
      }),
  },
  initialState
);

export default send;
