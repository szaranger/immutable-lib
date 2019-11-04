import { expect } from "chai";
import pop from "../src/pop";

describe("Pop", () => {
  it("should remove the last item from the array", () => {
    const a = [1, 2, 3];
    const b = pop(a);
    expect([1, 2]).to.eql(b);
  });
});
