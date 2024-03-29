import React from "react";
import "./App.css";
import ColorProvider from "./components/colorProvider/ColorProvider";
import { colors } from "./settings";

export interface TileInfo {
  color: string;
  rowIndex: number;
  colIndex: number;
  flooded: boolean;
}

function FloodIt() {
  const cols = 10;
  const rows = 10;
  const tiles: TileInfo[][] = [];

  for (let rowIndex = 0; rowIndex < cols; rowIndex++) {
    const row: TileInfo[] = [];
    for (let colIndex = 0; colIndex < rows; colIndex++) {
      row.push({
        color: colors[Math.floor(Math.random() * colors.length)],
        rowIndex: colIndex,
        colIndex: rowIndex,
        flooded: rowIndex === 0 && colIndex === 0,
      });
    }
    tiles.push(row);
  }

  return (
    <div className="App">
      <ColorProvider tiles={tiles} />
    </div>
  );
}

export default FloodIt;
