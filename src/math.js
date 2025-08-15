/**
 * Sums all provided numbers
 *
 * @param {...number} numbers - Numbers to sum
 * @returns {number} Sum of all numbers
 * @throws {Error} If any argument is not a number
 */
export function add(...numbers) {
  if (!numbers.every((number) => typeof number === "number")) {
    throw new Error("All arguments must be numbers");
  }

  return numbers.reduce((sum, number) => sum + number, 0);
}
