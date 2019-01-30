import inquirer from "inquirer";
import { inRange, isNumber } from "lodash";

const minDimension = 1;
const maxDimension = 26;

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
    },
    {
      name: "width",
      type: "number",
      message: `Enter a width between ${minDimension} and ${maxDimension}`,
      validate: value => {
        if (isNumber(value) && inRange(value, 1, 26)) {
          return true;
        } else {
          return `Please enter a number between ${minDimension} and ${maxDimension}.`;
        }
      }
    },
    {
      name: "height",
      type: "number",
      message: `Enter a height between ${minDimension} and ${maxDimension}`,
      validate: value => {
        if (isNumber(value) && inRange(value, 1, 26)) {
          return true;
        } else {
          return `Please enter a number between ${minDimension} and ${maxDimension}.`;
        }
      }
    }
  ]);
