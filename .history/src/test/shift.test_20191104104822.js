import { expect } from "chai";
import shift from "../shift";

describe("Shift", () => {
  it("should add an item to teh beginning of an array", () => {
    const a = [1, 2, 3];
    const b = reverse(a);
    expect(b).to.eql([3, 2, 1]);
  });
});
