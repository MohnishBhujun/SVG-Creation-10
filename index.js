const inquirer = require("inquirer");
const fs = require("fs");
const generateLogoContent = require("./utilities/contcheck.js");

const shapeOptions = ["CustomCircle", "CustomTriangle", "CustomSquare"];

inquirer
  .prompt([
    {
      type: "list",
      name: "shape",
      message: "Choose a shape",
      choices: shapeOptions,
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Choose a shape color (or hexadecimal code)",
      validate: function (input) {
        if (/[^a-zA-Z0-9#\s]/.test(input)) {
          return "Invalid color input...";
        } else if (input.trim() !== "") {
          return true;
        }
        return "Please enter a text...";
      },
    },
    {
      type: "input",
      name: "textContent",
      message: "Enter 3 letters for your shape!",
      validate: function (input) {
        if (/[^a-zA-Z0-9\s]/.test(input)) {
          return "Input cannot contain special characters.";
        } else if (input.trim() !== "") {
          return true;
        }
        return "Please enter a text...";
      },
    },
    {
      type: "input",
      name: "textColor",
      message: "Choose a text color (or hexadecimal code)",
      validate: function (input) {
        if (/[^a-zA-Z0-9#\s]/.test(input)) {
          return "Invalid color input...";
        } else if (input.trim() !== "") {
          return true;
        }
        return "Please enter a text...";
      },
    },
  ])
  .then((answers) => {
    const LogoContent = generateLogoContent(answers);
    fs.writeFile("logo.svg", LogoContent, (err) => {
      err ? console.error(err) : console.log("Generated logo.svg");
    });
  });