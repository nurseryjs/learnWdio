describe("Blank", () => {
	it("upButton is ok", function() {
		browser.url("/");
		browser.waitForVisible("#main");
		const elem = $("#ul-id-0-20");
		elem.scroll();
		$("#upbutton-container").click();
	});
	it("has orderForm", function() {
		browser.url("/");
		browser.waitForVisible("#ul-id-922-0");
		browser.pause(1200);
		expect(global.browser).to.deep.equal(browser);
		$("#ul-id-922-0 a").click();
		browser.pause(1200);
		expect(browser.isVisible("#aDialog-content")).to.be.true;
		var orderForm = $("#aDialog-content");
		orderForm.$$("input").forEach(element => {});
		orderForm.$$("input")[0].setValue("asdsa@dsadsa.as");
		browser.pause(1200);
		orderForm.$$("input")[1].setValue("22222222222");
		browser.pause(1200);
		orderForm.$$("textarea")[0].setValue("sadsadsadsadsadsdas");
		browser.pause(1200);
		$("#aDialog-content div.js-orderForm-btn").click();
		browser.pause(1200);
		expect(browser.isVisible(".ul-orderForm-status-dialog")).to.be.true;
	});
});
// global.browser === browser
