import { expect } from "chai";
import splice from "../splice";

describe("Sort", () => {
  it("should remove an item from the beginning of an array", () => {
    const a = [1, 2, 3];
    const b = sort(a, (x, y) => y - x);
    expect(b).to.eql([3, 2, 1]);
  });
});
