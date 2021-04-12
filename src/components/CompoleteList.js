import React from "react";
import { format } from "date-fns";
import "./Todo.scss";
import { MdRemoveCircleOutline } from "react-icons/md";

const CompoleteList = ({ todos, onRemove }) => {
  return (
    <ul className="list">
      {todos &&
        todos.map((todo) => (
          <div className="item">
            <div className="text">
              <span>{format(new Date(todo.time), "yyyy.MM.dd")} 완료 : </span>
              {todo.text}
            </div>
            <div className="remove" onClick={() => onRemove(todo.id)}>
              <MdRemoveCircleOutline />
            </div>
          </div>
        ))}
    </ul>
  );
};
export default CompoleteList;
