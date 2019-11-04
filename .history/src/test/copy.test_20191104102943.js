import { assert } from "chai";
import copy from "../copy";

describe("Immutable", () => {
  it("should copy an array to a new variable", () => {
    const a = [1, 2, 3];
    const b = copy(a);
    expect(a).tob);
  });
});
