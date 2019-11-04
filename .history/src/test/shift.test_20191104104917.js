import { expect } from "chai";
import shift from "../shift";

describe("Shift", () => {
  it("should remove an item to the beginning of an array", () => {
    const a = [1, 2, 3];
    const b = shift(a);
    expect(b).to.eql([2, 3]);
  });
});
