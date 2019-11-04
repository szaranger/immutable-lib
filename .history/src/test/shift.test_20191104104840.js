import { expect } from "chai";
import shift from "../shift";

describe("Shift", () => {
  it("should add an item to the beginning of an array", () => {
    const a = [1, 2, 3];
    const b = shift(a, 4);
    expect(b).to.eql([4, 1]);
  });
});
