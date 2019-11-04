import { assert } from "chai";
import { getStateByPostcode } from "../.";

describe("Immutable", () => {
  it("should copy an array to a new variable", () => {
    assert.equal(getStateByPostcode("3000"), "VIC");
  });
});
