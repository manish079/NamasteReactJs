import { add } from "../Sum.js";

test("Sum function should caculate the sum of two numbers", () => {
  const result = add(3, 4);

  //Assertion
  expect(result).toBe(7);
});
