import { takeLatest } from "@redux-saga/core/effects";
import { createAction, handleActions } from "redux-actions";
import createRequestSaga from "../lib/createRequestSaga";
import * as actionType from "./actionType";
import * as api from "../lib/api";
import produce from "immer";

export const getTodos = createAction(actionType.GET_TODOS);
export const getDones = createAction(actionType.GET_DONES);

const getTodosSaga = createRequestSaga(actionType.GET_TODOS, api.getTodos);
const getDonesSaga = createRequestSaga(actionType.GET_DONES, api.getTodos);

export function* loadSaga() {
  yield takeLatest(actionType.GET_TODOS, getTodosSaga);
  yield takeLatest(actionType.GET_DONES, getDonesSaga);
}

const initialState = {
  todos: null,
  dones: null,
};

const load = handleActions(
  {
    [actionType.GET_TODOS_SUCCESS]: (state, { meta: todos }) =>
      produce(state, (draft) => {
        draft.todos = todos;
      }),
    [actionType.GET_DONES_SUCCESS]: (state, { meta: todos }) =>
      produce(state, (draft) => {
        draft.dones = todos.filter((todo) => todo.done);
      }),
  },
  initialState
);

export default load;
