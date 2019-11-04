import { expect } from "chai";
import dele from "../copy";

describe("Copy", () => {
  it("should copy an array to a new variable", () => {
    const a = [1, 2, 3];
    const b = copy(a);
    expect(a).to.eql(b);
  });
});
