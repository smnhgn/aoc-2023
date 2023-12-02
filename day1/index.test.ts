import { assertEquals, assertExists } from "std/assert/mod.ts";
import { calibrate } from "./index.ts";

const __dirname = new URL('.', import.meta.url).pathname;

const exampleInput = await Deno.readTextFile(`${__dirname}/testInput.txt`);
const input = await Deno.readTextFile(`${__dirname}/input.txt`);


Deno.test("Day 1 example", () => {
  assertEquals(calibrate(exampleInput), 142);
});

Deno.test("Day 1 solution", () => {
  const solution = calibrate(input);
  assertExists(solution);
  console.info(solution);
});