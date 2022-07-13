import assert from "assert";
import * as d3 from "../src/index.js";

it("exports the expected schemes", () => {
  assert.deepStrictEqual(Object.keys(d3).sort(), [
    "interpolateBlues",
    "interpolateBluesRert",
    "schemeBlues",
    "schemeBluesRert"
  ]);
});
