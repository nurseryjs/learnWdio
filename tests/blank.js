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
		browser.waitForVisible("#ul-id-1838-2");
		browser.pause(1200);
		expect(global.browser).to.deep.equal(browser);
		$("#ul-id-1838-2 a").click();
		browser.pause(1200);
		expect(browser.isVisible("#aDialog-data")).to.be.true;
		var orderForm = $("#aDialog-data");
		orderForm.$$("input").forEach(element => {});
		orderForm.$$("input")[0].setValue("asdsa@dsadsa.as");
		orderForm.$$("input")[1].setValue("22222222222");
		orderForm.$$("textarea")[0].setValue("sadsadsadsadsadsdas");
		$("#aDialog-content div.js-orderForm-btn").click();
		browser.pause(1200);
		expect(browser.isVisible(".ul-orderForm-status-dialog")).to.be.true;
	});
});
