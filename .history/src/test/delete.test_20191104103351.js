import { expect } from "chai";
import delete from "../delete";

describe("Delete", () => {
  it("should create a new array minus", () => {
    const a = [1, 2, 3];
    const b = copy(a);
    expect(a).to.eql(b);
  });
});
