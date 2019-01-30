import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import { promptGameSettings } from "./src/inquirer";
import { createBoard, displayBoard } from "./src/board";

const header = () => {
  clear();
  console.log(
    chalk.blue(
      figlet.textSync("Minesweeper", {
        horizontalLayout: "full"
      })
    )
  );
};

const run = async () => {
  try {
    header();
    const game = await promptGameSettings();
    header();
    console.log(`Hello ${game.username}!`);
    const board = createBoard(game.width, game.height);
    displayBoard(board);
  } catch (exception) {
    console.log(chalk.red("There was an exception: " + exception));
  }
};

run();
