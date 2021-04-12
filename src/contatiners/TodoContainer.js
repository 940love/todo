import React from "react";
import { connect } from "react-redux";
import "../components/TodoList";
import Input from "../components/Input";
import TodoList from "../components/TodoList";
import { getTodos } from "../modules/load";
import { insertTodo, deleteTodo, updateTodo } from "../modules/send";

const { useEffect } = React;

const TodoContainer = ({
  getTodos,
  insertTodo,
  deleteTodo,
  updateTodo,
  todos,
  todo,
}) => {
  useEffect(() => {
    getTodos();
  }, [getTodos, todo]);

  const onSubmit = async ({ text }) => {
    try {
      await insertTodo({ text });
    } catch (error) {
      console.log("e", error);
    }
  };

  const onRemove = async (id) => {
    try {
      await deleteTodo(id);
      alert("할일을 삭제했습니다!");
    } catch (error) {
      console.log("e", error);
    }
  };

  const onToggle = async (todo) => {
    const { id, done, text } = todo;
    try {
      await updateTodo({ id, done });
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
export default connect(
  ({ load, send }) => ({
    todos: load.todos,
    todo: send.todo,
  }),
  {
    getTodos,
    insertTodo,
    deleteTodo,
    updateTodo,
  }
)(TodoContainer);
