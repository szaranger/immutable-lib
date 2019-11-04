import { expect } from "chai";
import unshift from "../unshift";

describe("Shift", () => {
  it("should remove an item from the beginning of an array", () => {
    const a = [1, 2, 3];
    const b = unshift(a);
    expect(b).to.eql([undefined, 2, 3]);
  });
});
