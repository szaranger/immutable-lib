import { expect } from "chai";
import del from "../del";

describe("Push", () => {
  it("should add a new item at teh end of an array", () => {
    const a = [1, 2, 3];
    const b = del(a, 1);
    expect([1, 3]).to.eql(b);
  });
});
