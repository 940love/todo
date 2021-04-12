// `https://todolist-cc9f0-default-rtdb.firebaseio.com/todo.json`

import axios from "axios";

const url = "https://todolist-cc9f0-default-rtdb.firebaseio.com/todos";
export const getTodos = async () => {
  const res = await axios.get(url + ".json");

  const arr = [];
  for (let element in res.data)
    if (res.data[element]) arr.push(res.data[element]);

  return arr;
};

export const insertTodo = ({ text }) => {
  const time = new Date();
  const id = Date.parse(time);

  return axios.put(
    url + "/" + id + ".json",
    JSON.stringify({ id, text, done: false, time })
  );
};

export const deleteTodo = (id) => axios.delete(url + "/" + id + ".json");

export const updateTodo = ({ id, done }) =>
  axios.patch(url + "/" + id + ".json", { done: !done });
