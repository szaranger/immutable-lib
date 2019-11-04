import { assert } from "chai";
import copy from "../copy";

describe("Immutable", () => {
  it("should copy an array to a new variable", () => {
    assert.equal(getStateByPostcode("3000"), "VIC");
  });
});
