import inquirer from "inquirer";

export const promptGameSettings = () =>
  inquirer.prompt([
    {
      name: "username",
      type: "input",
      message: "What is your name",
      validate: value => {
        if (value.length) {
          return true;
        } else {
          return "Please enter your name.";
        }
      }
    }
  ]);
