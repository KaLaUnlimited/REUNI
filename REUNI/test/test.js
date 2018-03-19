var multiply = require("../src/multiply.js");
var expect = require("chai").expect;

describe("Multiply", function() {
	it("should return product of numbers", function() {
		expect(multiply(2, 10)).to.equal(20);
	});
});