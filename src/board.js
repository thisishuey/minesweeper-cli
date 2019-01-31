import chalk from "chalk";
import { Line } from "clui";

const loadBoard = (width, height) => {
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

export const createBoard = (width = 10, height = 10) => ({
  mines: loadBoard(width, height),
  moves: loadBoard(width, height)
});

export const displayBoard = board => {
  const headers = new Line();
  headers.padding(3);
  board.moves[0].map((column, index) =>
    headers.column(` ${String.fromCharCode(index + 97)}`, 3, [chalk.blue.bold])
  );
  headers.fill();
  headers.output();

  board.moves.map((row, index) => {
    const line = new Line();

    line.column((index + 1).toString(), 3, [chalk.blue.bold]);
    row.map(col => line.column(col ? "   " : "[ ]", 3, [chalk.gray]));
    line.fill();
    line.output();
  });
};

export const updateBoard = (board, move) => {
  const moves = [...board.moves];
  const [first, ...rest] = move;
  const column = first.charCodeAt(0) - 97;
  const row = rest.join("") - 1;
  moves[row][column] = 1;
  return { ...board, ...{ moves } };
};
