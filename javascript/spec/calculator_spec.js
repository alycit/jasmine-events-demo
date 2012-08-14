describe("CalculatorController", function() {
	it("clears the display when the clear button is pressed", function(){
		affix("input#screen[value=5]");
        affix("button#keyPad_btnClr");

		var calculator = CalculatorController;
		spyOn(calculator, 'clearScreen').andCallThrough();
		
		calculator.initialize();
	    var calculatorView = calculator.getView();
		spyOn(calculatorView, 'setScreenValue').andCallThrough();

        calculatorView.getClearButton().trigger("click");
		expect(calculator.clearScreen).toHaveBeenCalled();
		expect(calculatorView.setScreenValue).toHaveBeenCalled();
		expect(calculatorView.getScreenValue()).toBe('0');
	});
});
