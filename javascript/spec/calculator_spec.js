describe("CalculatorController", function() {
	it("clears the display when the clear button is pressed", function(){
		affix("input#keyPad_UserInput[value=5]");
        affix("button#keyPad_btnClr");
            var calculatorModel = new CalculatorModel();
            var calculatorController = new CalculatorController(calculatorModel);
            var calculatorView = new CalculatorView(calculatorModel,calculatorController);
            calculatorView.initialize();
            calculatorView.getClearButton().trigger("click");
            expect(calculatorView.getInput().val()).toBe('0');

	});
    it("adds 1 to the input screen when current value is 5",function(){
        affix("input#keyPad_UserInput[value=5]");
        affix("button#keyPad_btn1");
        var calculatorModel = new CalculatorModel();
        calculatorModel.setInputValue("5");
        var calculatorController = new CalculatorController(calculatorModel);
        var calculatorView = new CalculatorView(calculatorModel, calculatorController);
        calculatorView.initialize();
        calculatorView.getOneButton().trigger("click");
        expect(calculatorView.getInput().val()).toBe('51');
    });
    it("adds 1 to the input screen when current value is 0",function(){
        affix("input#keyPad_UserInput[value=0]");
        affix("button#keyPad_btn1");
        var calculatorModel = new CalculatorModel();
        var calculatorController = new CalculatorController(calculatorModel);
        var calculatorView = new CalculatorView(calculatorModel, calculatorController);
        calculatorView.initialize();
        calculatorView.getOneButton().trigger("click");
        expect(calculatorView.getInput().val()).toBe('1');
    });
});
