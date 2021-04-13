import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../components/TodoList";
import Input from "../components/Input";
import TodoList from "../components/TodoList";
import { getTodos } from "../modules/load";
import { insertTodo, deleteTodo, updateTodo } from "../modules/send";

const { useEffect } = React;

const TodoContainer = () => {
  const { todo, todos } = useSelector(({ load, send }) => ({
    todos: load.todos,
    todo: send.todo,
  }));

  const dispatch = useDispatch();
  const getList = useCallback(() => dispatch(getTodos(), [dispatch]));
  const insertItem = useCallback((text) =>
    dispatch(insertTodo(text), [dispatch])
  );
  const deleteItem = useCallback((id) => dispatch(deleteTodo(id), [dispatch]));
  const updateItem = useCallback(({ id, done }) =>
    dispatch(updateTodo({ id, done }), [dispatch])
  );
  useEffect(() => {
    getList();
  }, [todo]);

  const onSubmit = async ({ text }) => {
    try {
      await insertItem({ text });
    } catch (error) {
      console.log("e", error);
    }
  };

  const onRemove = async (id) => {
    try {
      await deleteItem(id);
      alert("할일을 삭제했습니다!");
    } catch (error) {
      console.log("e", error);
    }
  };

  const onToggle = async (todo) => {
    const { id, done, text } = todo;
    try {
      await updateItem({ id, done });
      alert(text + "를 수정했습니다!");
    } catch (error) {
      console.log("e", error);
    }
  };
  return (
    <>
      <Input onSubmit={onSubmit} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
};
export default React.memo(TodoContainer);
