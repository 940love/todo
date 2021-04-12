import React, { useState } from "react";
import "./Todo.scss";

const Input = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    if (e.target.name === "text") {
      setText(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      alert("내용을 입력해주세요!");
      return;
    }
    onSubmit({
      text,
    });
    setText("");
  };

  return (
    <div className="input">
      <form onSubmit={handleSubmit}>
        <input
          name="text"
          value={text}
          onChange={onChange}
          placeholder="할일을 입력하세요..."
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};
export default Input;
