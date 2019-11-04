import { expect } from "chai";
import splice from "../splice";

describe("Splice", () => {
  it("should remove an item from the beginning of an array", () => {
    const a = [1, 2, 3, 4, 5, 6];
    const b = splice(a, 1, 2, [7, 8]);
    expect(b).to.eql([3, 2, 1, [7, 8], 4, 5, 6]);
  });
});
