import React from "react";
import cx from "classnames";
import "./Todo.scss";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <ul className="list">
      {todos &&
        todos.map((todo) => (
          <li className="item" key={todo.id}>
            <div
              className={cx("checkbox", todo.done ? "checked" : "")}
              onClick={() => onToggle(todo)}
            >
              {todo.done ? (
                <MdCheckBox className="icon" />
              ) : (
                <MdCheckBoxOutlineBlank className="icon" />
              )}
              <div className="text">{todo.text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(todo.id)}>
              <MdRemoveCircleOutline className="icon" />
            </div>
          </li>
        ))}
    </ul>
  );
};
export default TodoList;
