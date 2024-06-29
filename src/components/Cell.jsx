import React from "react";

const Cell = ({ value, onClick }) => (
  <button className="cell" onClick={onClick}>
    {value}
  </button>
);

export default Cell;
