describe("CalculatorController", function() {
	it("", function(){
		affix("button#keyPad_btn0[value=0]");
		var calculatorForm = CalculatorView;
		var zeroButton = calculatorForm.getZeroField();
		expect(zeroButton.val()).toBe('0');
	});
});
