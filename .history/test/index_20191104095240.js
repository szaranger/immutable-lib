import { assert } from "chai";
import { getStateByPostcode } from "../.";

describe("Immutable", () => {
  it("should get state from postcode", () => {
    assert.equal(getStateByPostcode("3000"), "VIC");
  });
});
