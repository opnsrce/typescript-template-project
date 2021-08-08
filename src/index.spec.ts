import chai, { expect } from "chai";
import sinonChai from "sinon-chai";

import { add } from "./index";

chai.use(sinonChai);

describe("add", () => {
    it("should add two numbers together", () => {
        expect(add(4, 3)).to.equal(7);
    });
});