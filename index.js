import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import {
  promptGameSettings,
  promptNextMove,
  promptEndGame
} from "./src/inquirer";
import { createBoard, displayBoard, updateBoard } from "./src/board";

const drawHeader = () => {
  clear();
  console.log(
    chalk.blue(
      figlet.textSync("Minesweeper", {
        horizontalLayout: "full"
      })
    )
  );
};

const drawBoard = (settings, board) => {
  drawHeader();
  console.log(`Hello ${settings.username}!`);
  displayBoard(board);
};

const run = async () => {
  try {
    drawHeader();
    const settings = await promptGameSettings();
    const board = createBoard(settings.width, settings.height);
    while (true) {
      drawBoard(settings, board);
      const { nextMove } = await promptNextMove();
      const newBoard = updateBoard(board, nextMove);
    }
    const { playAgain } = await promptEndGame();
    if (playAgain) {
      run();
    } else {
      clear();
    }
  } catch (exception) {
    console.log(chalk.red("There was an exception: " + exception));
  }
};

run();
