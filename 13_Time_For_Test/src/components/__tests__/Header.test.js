import Contact from "../Contact.js";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Should render load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByText("Contact"); //anywhere where Contact text then this test will be pass

  //   const heading = screen.getByPlaceholderText("name");

  //Assertion
  expect(heading).toBeInTheDocument();
});

test("Should button into contact component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  //Assertion
  expect(button).toBeInTheDocument();
});

test("Should load 2 input boxes on the contact component", () => {
  render(<Contact />);

  //Querying
  const inputBoxes = screen.getAllByRole("input"); //This will return JSX element(react fiber note, virtual dom, react element, object all are same thing)
  //   console.log(inputBoxes);

  //Assertion
  expect(inputBoxes / length).toBe(2); //not.toBe(2);
});
