const { CustomCircle, CustomTriangle, CustomSquare } = require("../lib/shapes.js");

function generateLogoContent({ shape, shapeColor, textContent, textColor }) {
  if (shape === "CustomTriangle") {
    const triangle = new CustomTriangle(shapeColor, textColor, textContent);
    return triangle.render();
  } else if (shape === "CustomCircle") {
    const circle = new CustomCircle(shapeColor, textColor, textContent);
    return circle.render();
  } else if (shape === "CustomSquare") {
    const square = new CustomSquare(shapeColor, textColor, textContent);
    return square.render();
  }
}

module.exports = generateLogoContent;