import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../components/TodoList";
import CompoleteList from "../components/CompoleteList";
import { getDones } from "../modules/load";
import { deleteTodo } from "../modules/send";
const { useEffect } = React;

const CompleteContainer = () => {
  const { todo, dones } = useSelector(({ load, send }) => ({
    dones: load.dones,
    todo: send.todo,
  }));
  const dispatch = useDispatch();
  const getList = useCallback(() => dispatch(getDones(), [dispatch]));
  const deleteItem = useCallback((id) => dispatch(deleteTodo(id), [dispatch]));

  useEffect(() => {
    getList();
  }, [todo]);

  const onRemove = async (id) => {
    try {
      await deleteItem(id);
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
export default React.memo(CompleteContainer);
