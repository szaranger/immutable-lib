import { assert } from "chai";
import { getStateByPostcode } from "../copy";

describe("Immutable", () => {
  it("should copy an array to a new variable", () => {
    assert.equal(getStateByPostcode("3000"), "VIC");
  });
});
