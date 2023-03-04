import { expect } from "chai";
import add from "./index";

describe("Add", () => {
    context("When the inputs are 5 and 2", () => {
        it("should return 7", () => {
            expect(add(5, 2)).to.equal(7);
        });
    });
});
