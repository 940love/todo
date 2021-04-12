import React, { useState } from "react";
import { connect } from "react-redux";
import qs from "qs";
import "../components/TodoList";
import CompoleteList from "../components/CompoleteList";
import { getDones } from "../modules/load";
import { deleteTodo } from "../modules/send";

const { useEffect } = React;

const CompleteContainer = ({ getDones, deleteTodo, dones, todo }) => {
  useEffect(() => {
    getDones();
  }, [getDones, todo]);

  const onRemove = async (id) => {
    try {
      await deleteTodo(id);
      alert("할일을 삭제했습니다!");
    } catch (error) {
      console.log("e", error);
    }
  };
  return (
    <>
      <CompoleteList todos={dones} onRemove={onRemove} />
    </>
  );
};
export default connect(
  ({ load, send }) => ({
    dones: load.dones,
    todo: send.dones,
  }),
  {
    getDones,
    deleteTodo,
  }
)(CompleteContainer);
