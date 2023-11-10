import { circle, triangle, square } from "./creation.js";

// making a testing suite called shapes
describe("Shapes", () => {
  // testing the circle inside of the shapes testing suite
  describe("circle", () => {
    it("should render a circle", () => {
      const Circle = new circle(50, 0, 0);
      const expectedCircle = `<circle cx="0" cy="0" r="50" fill="[object Object]"/>`;
      expect(Circle.render(Circle)).toBe(expectedCircle);
    }); /* closes the it statement */
  }); /* closes the circle testing suite*/
  // testing the triangle
  describe("triangle", () => {
    it("should render a triangle", () => {
      const Triangle = new triangle(50, 0, 0);
      const expectedTriangle = `<path d="M0-21.650635094610966L-25 21.650635094610966L25 21.650635094610966Z" fill="[object Object]"/>`;
      expect(Triangle.render(Triangle)).toBe(expectedTriangle);
    }); /* closes the it argument */
  }); /* closes the triangle testing suite */
  // opening the square testing suite
  describe("square", () => {
    it("should render a square", () => {
      const Square = new square(50, 0, 0);
      const expectedSquare = `<rect x="-25" y="-25" height="50" width="50" fill="[object Object]"/>`;
      expect(Square.render(Square)).toBe(expectedSquare);
    }); /* closes the it argument */
  }); /* closes the square testing suite */
}); /* closes the shapes testing suite */
