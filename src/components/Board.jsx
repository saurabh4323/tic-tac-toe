import React from "react";
import Cell from "./Cell";

const Board = ({ cells, onClick }) => (
  <div className="board">
    {cells.map((cell, index) => (
      <Cell key={index} value={cell} onClick={() => onClick(index)} />
    ))}
  </div>
);

export default Board;
