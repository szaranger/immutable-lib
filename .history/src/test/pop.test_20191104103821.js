import { expect } from "chai";
import pop from "../pop";

describe("Pop", () => {
  it("should remove an item from the array", () => {
    const a = [1, 2, 3];
    const b = pop(a, 1);
    expect([1, 3]).to.eql(b);
  });
});