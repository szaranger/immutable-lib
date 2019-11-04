import { expect } from "chai";
import unshift from "../src/unshift";

describe("Shift", () => {
  it("should add an item from the beginning of an array", () => {
    const a = [1, 2, 3];
    const b = unshift(a, 4);
    expect(b).to.eql([4, 1, 2, 3]);
  });
});
