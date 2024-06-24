import React from "react";
import { useSelector } from "react-redux";

export default function DisplayCounter() {
  const counter = useSelector((store) => store.counter.count);

  return (
    <div>
      <p className="lead mb-4">Counter current value: {counter}</p>
    </div>
  );
}
