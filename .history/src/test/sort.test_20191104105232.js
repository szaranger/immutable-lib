import { expect } from "chai";
import sort from "../sort";

describe("Sort", () => {
  it("should remove an item from the beginning of an array", () => {
    const a = [1, 2, 3];
    const b = shift(a);
    expect(b).to.eql([2, 3]);
  });
});
