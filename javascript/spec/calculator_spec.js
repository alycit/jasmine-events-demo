describe("CalculatorController", function() {
	it("clears the display when the clear button is pressed", function(){
		affix("input#keyPad_UserInput[value=5]");
        affix("button#keyPad_btnClr");
		var calculator = CalculatorController;
	    var calculatorView = calculator.getView();

        calculatorView.getClearButton().trigger("click");
		expect(calculatorView.getScreenValue()).toBe('0');
	});
});
