import React from "react";
import { useDispatch } from "react-redux";
import { CounterAction } from "../Store/index";

export default function Controls() {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(CounterAction.increment());
  };

  const handleDecrement = () => {
    dispatch(CounterAction.decrement());
  };

  return (
    <div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-lg px-4"
          onClick={handleDecrement}
        >
          -1
        </button>
      </div>
    </div>
  );
}
