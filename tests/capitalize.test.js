import { strict as assert } from "node:assert";
import capitalize from "../src/capitalize.js";

if (capitalize("hello") !== "Hello") {
  throw new Error("Функция работает неверно!");
}
assert.equal(capitalize(""), "");

// if (capitalize("") !== "") {
//   throw new Error("Функция работает неверно!");
// }
assert.equal(capitalize("hello"), "Hello");

console.log("Все тесты пройдены!");
