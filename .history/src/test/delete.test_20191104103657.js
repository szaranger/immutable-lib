import { expect } from "chai";
import del from "../delete";

describe("Delete", () => {
  it("should create a new array minus given array item", () => {
    const a = [1, 2, 3];
    const b = del(a, 1);
    expect([]).to.eql(b);
  });
});
