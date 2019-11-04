import { expect } from "chai";
import sort from "../src/sort";

describe("Sort", () => {
  it("should sort an array", () => {
    const a = [1, 2, 3];
    const b = sort(a, (x, y) => y - x);
    expect(b).to.eql([3, 2, 1]);
  });
});
