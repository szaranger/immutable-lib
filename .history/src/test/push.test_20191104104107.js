import { expect } from "chai";
import push from "../del";

describe("Push", () => {
  it("should add a new item at teh end of an array", () => {
    const a = [1, 2, 3];
    const b = push(a, 4);
    expect([1, 3]).to.eql(b);
  });
});
