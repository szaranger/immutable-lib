import { expect } from "chai";
import shift from "../reverse";

describe("Reverse", () => {
  it("should reverse the order of an array", () => {
    const a = [1, 2, 3];
    const b = reverse(a);
    expect(b).to.eql([3, 2, 1]);
  });
});
