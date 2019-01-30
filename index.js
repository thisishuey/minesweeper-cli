import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import { promptGameSettings } from "./src/inquirer";

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
  } catch (exception) {
    console.log(chalk.red("There was an exception: " + exception));
  }
};

run();
