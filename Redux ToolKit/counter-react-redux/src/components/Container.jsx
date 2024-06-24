import React from "react";

function Container({ children }) {
  return (
    <div>
      <div className="card" style={{ width: "80rem" }}>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}

export default Container;
