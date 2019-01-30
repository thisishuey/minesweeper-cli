import chalk from "chalk";
import { Line } from "clui";

export const createBoard = (width = 10, height = 10) => {
  let board = [];
  for (let i = 0; i < height; i++) {
    let row = [];
    for (let j = 0; j < width; j++) {
      row.push(0);
    }
    board.push(row);
  }
  return board;
};

export const displayBoard = board => {
  const headers = new Line();
  headers.padding(3);
  for (let i = 0; i < board[0].length; i++) {
    headers.column(" " + String.fromCharCode(i + 97), 3, [chalk.blue.bold]);
  }
  headers.fill();
  headers.output();

  board.map((row, index) => {
    const line = new Line();

    line.column((index + 1).toString(), 3, [chalk.blue.bold]);
    row.map(col => line.column("[ ]", 3));
    line.fill();
    line.output();
  });
};
