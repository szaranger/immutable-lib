import { expect } from "chai";
import del from "../del";

describe("Delete", () => {
  it("should create a new array minus given array item", () => {
    const a = [1, 2, 3];
    const b = del(a, 1);
    expect([1, 3]).to.eql(b);
  });
});
