//Circle
// SVG tag for circle: <circle>
class circle {
  // defining the circle by its radius
  constructor(r, cx, cy) {
    this.r = r;
    this.cx = cx;
    this.cy = cy;
  } /* this closes the circle constructor variables */
  // create and color the circle
  render(color) {
    // saying that if a color has been specified, to fill the shape with that color, if not, return an empty string
    const circleColor = color ? `fill="${color}"` : "";
    // sending the path instructions to the SVG file
    const circlePath = `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" ${circleColor}/>`;
    return circlePath;
  } /* this closes the render function */
} /* this closes the circle class constructor */

//Triangle
class triangle {
  constructor(side, x, y) {
    this.side = side;
    this.x = x;
    this.y = y;
  } /* closes constructor variables */
  // create and color the shape into an svg file
  render(color) {
    // forumlating the starting point for the triangle (height)
    // forumla: height = math.sqrt(3) / 2 * this.side
    const startingPointT = (Math.sqrt(3) / 2) * `${this.side}`;
    // telling the code how to render the triangle based on the height
    // SVG path commands:
    /*  M = moveto
            L = lineto 
            H = horizontal lineto
            V = vertical lineto
            C = curveto
            S = smooth curveto
            Q = quadratic Bézier curve
            T = smooth quadratic Bézier curveto
            A = elliptical Arc
            Z = closepath
            d = sends the path to be drawn to the SVG file
        */
    const path = `M${this.x}${this.y - startingPointT / 2}` + `L${this.x - this.side / 2} ${this.y + startingPointT / 2}` + `L${this.x + this.side / 2} ${this.y + startingPointT / 2}` + `Z`;
    // saying that if a color has been specified, to fill the shape with that color, if not, return an empty string
    const triangleColor = color ? `fill="${color}"` : "";
    // sending the path instructions to the SVG file to create and color the triangle
    const trianglePath = `<path d="${path}" ${triangleColor}/>`;
    return trianglePath;
  } /* this closes the render function */
} /* this closes the triangle constructor function */

//Square
class square extends triangle {
  constructor(side, x, y) {
    super(side, x, y);
  } /* this closes the square constructor variables */
  // create and color the square
  // SVG tag for square: <rect>
  render(color) {
    // saying that if a color has been specified, to fill the shape with that color, if not, return an empty string
    const squareColor = color ? `fill="${color}"` : "";
    // sending the path instructions to the SVG file
    const squarePath = `<rect x="${this.x - this.side / 2}" y="${this.y - this.side / 2}" height="${this.side}" width="${this.side}" ${squareColor}/>`;
    return squarePath;
  } /* closes the render square function */
} /* this closes the square class constructor */

// export the shapes
export default { circle, triangle, square };
