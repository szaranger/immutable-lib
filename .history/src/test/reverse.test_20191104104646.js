import { expect } from "chai";
import reverse from "../reverse";

describe("Push", () => {
  it("should add a new item at the end of an array", () => {
    const a = [1, 2, 3];
    const b = push(a, 4);
    expect(b).to.eql([1, 2, 3, 4]);
  });
});
