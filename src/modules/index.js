import { all } from "@redux-saga/core/effects";
import { combineReducers } from "redux";
import load, { loadSaga } from "./load";
import send, { sendSaga } from "./send";

const rootReducer = combineReducers({
  load,
  send,
});

export function* rootSaga() {
  yield all([loadSaga(), sendSaga()]);
}
export default rootReducer;
