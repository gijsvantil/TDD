// Make Chai library with expect keyword available
var expect  = require("chai").expect;
var request = require("request");

// Description of the feature
describe("Color Code Converter API", function() {
	// Description of the feature in more detail
	describe("RGB to Hex conversion", function() {
		//web server
		var url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";
		// status expectations
		it("returns status 200", function(done) {
			request(url, function(error, response, body) {
				expect(response.statusCode).to.equal(200);
				// wait for response value
				done();
			});
		});

		it("returns the color in hex", function(done) {
			request(url, function(error, response, body) {
				expect(body).to.equal("ffffff");
				done();
			});
		});

	});

	describe("Hex to RGB conversion", function() {
		var url = "http://localhost:3000/hexToRgb?hex=00ff00";

		it("returns status 200", function(done) {
			request(url, function(error, response, body) {
				expect(response.statusCode).to.equal(200);
				done();
			});
		});

		it("returns the color in RGB", function(done) {
			request(url, function(error, response, body) {
				expect(body).to.equal("[0,255,0]");
				done();
			});
		});
	});
});