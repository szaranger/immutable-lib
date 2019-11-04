import { expect } from "chai";
import delete from "../delete";

describe("Delete", () => {
  it("should delete an item to from an array non", () => {
    const a = [1, 2, 3];
    const b = copy(a);
    expect(a).to.eql(b);
  });
});
