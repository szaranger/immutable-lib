import { expect } from "chai";
import delete as del from "../delete";

describe("Delete", () => {
  it("should create a new array minus given object", () => {
    const a = [1, 2, 3];
    const b = delete(1);
    expect(a).to.eql(b);
  });
});
