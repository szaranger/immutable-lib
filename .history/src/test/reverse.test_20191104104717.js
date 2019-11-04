import { expect } from "chai";
import reverse from "../reverse";

describe("Reverse", () => {
  it("should reverse the order of an array", () => {
    const a = [1, 2, 3];
    const b = reberse(a, 4);
    expect(b).to.eql([1, 2, 3, 4]);
  });
});
