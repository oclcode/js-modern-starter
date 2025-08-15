import { add } from "@/math.js";

describe("add function", () => {
  test("adds numbers correctly", () => {
    expect(add(1, 2, 3)).toBe(6);
  });

  test("throws error when non-number arguments are provided", () => {
    expect(() => add(1, "2")).toThrow("All arguments must be numbers");
  });
});
