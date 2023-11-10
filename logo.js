//declaring variables and dependecies
import inquirer from "inquirer";
import fs from "fs";
import path from "path";
const dirname = path.resolve();
import colors from "./colorOptions.js";
import shapes from "./creation.js";

const { circle, triangle, square } = shapes;
const { colorKeyWords, colorHexCodes } = colors;

// Gathering information for making the logo
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Please enter up to three letters you would like displayed on your logo.",
      validate: (input) => input.length <= 3,
    } /* closes text prompt */,
    {
      type: "input",
      name: "textcolor",
      message: "Please enter a color keyword or six-digit hexidecimal code (including the #) for the desired color of the text.",
    } /* closes the textcolor prompt */,
    {
      type: "list",
      name: "shape",
      message: "What shape would you like your logo to be?",
      choices: ["Circle", "Triangle", "Square"],
    } /* closes the shape prompt */,
    {
      type: "input",
      name: "shapecolor",
      message: "Please enter a color keyword or the six-digit hexidecimal code (including the #) for the desired color of the shape.",
    } /* closes the shapecolor prompt */,
  ]) /* closes the inquirer prompts */

  // telling the code what to do with the provided answers
  .then((criteria) => {
    let shape;
    let fontSize = 50;
    // code for text
    const text = {
      // telling SVG the text criteria
      // code for text color
      textSpecification: {
        textFill: criteria.textcolor,
        textPath: `<text x="100" y="150" font-size="50" text-anchor="middle" fill="${this.textFill}">${this.text}</text>`,
      } /* closes the attributes declaration */,
      // render the text to the SVG file
      render: function () {
        return textPath;
      } /* closes the render function */,
    }; /* closes the text declaration */
    // code for shape
    let shapeSelection = criteria.shape.toLowerCase();
    let shapeColor = criteria.shapecolor;
    if (shapeSelection === "circle") {
      const circleRadius = Math.min(canvasHeight, canvasWidth) * 0.3;
      shape = new circle(circleRadius, canvasWidth / 2, canvasHeight / 2);
      let path = `<circle cx="${circle.canvasHeight}" cy="${circle.canvasWidth}" r="${this.circleRadius}" fill="${shapeColor}"/>`;
    } else if (shapeSelection === "triangle") {
      const triangleSide = Math.min(canvasHeight, canvasWidth) * 1;
      const startingPointT = (Math.sqrt(3) / 2) * `${triangleSide}`;
      shape = new triangle(triangleSide, canvasWidth / 2, canvasHeight / 2);
      let path = `<path d= M"${triangle.canvasHeight},${triangle.canvasWidth - startingPointT / 2}" L"${triangle.canvasHeight - triangleSide / 2},${triangle.canvasWidth + startingPointT / 2}" L"${triangle.canvasHeight + triangle / 2},${triangle.canvasWidth + startingPointT / 2} Z" fill=${shapeColor}/>`;
    } else {
      const squareSide = Math.min(canvasHeight, canvasWidth) * 0.75;
      shape = new square(squareSide, canvasHeight / 2, canvasWidth / 2);
      const path = `<rect width="${squareSide}" height="${squareSide}" fill="${shapeColor}"/>`;
    } /* closes if/else statement */
    // code for shape color
    // rendering items to the SVG file
    const toSVG = `
        <svg version="1.1"
        width="250" height="200"
        xmlns="http://www.w3.org/200/svg">
        
        ${shapeSelection.path}

        </svg>`;

    // telling the computer to save the file relative to this file
    fs.writeFileSync(`${dirname}/logo.svg`, toSVG.toString());
    // console logging if successful
    console.log("Done! You'll find your logo in logo.svg");
  }) /* closes the .then(answers) */
  // catching the error if there is one
  .catch((error) => {
    console.error(error);
  });
