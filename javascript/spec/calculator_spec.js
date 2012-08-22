describe("CalculatorController", function() {

    var calculator;
    var calculatorView;

    beforeEach(function(){
        affix("input#screen[value=0]");
        affix("button#keyPad_btnClr");
        affix("button#keyPad_btn1");
        affix("button#keyPad_btn2");
        affix("button#keyPad_btnDot");
        calculatorView = calculator_spec_helper.initializeCalcView();
        calculator = calculator_spec_helper.initializeCalculator();
    });

    it("clears the display when the clear button is pressed", function(){
        calculatorView.getClearButton().trigger("click");

		expect(calculator.clearScreen).toHaveBeenCalled();
		expect(calculatorView.setScreenValue).toHaveBeenCalledWith('0');
		expect(calculatorView.getScreenValue()).toBe('0');
	});

    it("it displays 1 when the 1 button is pressed", function(){
        calculatorView.getOneButton().trigger("click");

        expect(calculatorView.setScreenValue).toHaveBeenCalledWith('1');
        expect(calculatorView.getScreenValue()).toBe('1');
    });

    it("should append a new 1 when 1 is already displayed", function(){
        calculatorView.setScreenValue(1);
        calculatorView.getOneButton().trigger("click");

        expect(calculatorView.appendNumber).toHaveBeenCalledWith('1');
        expect(calculatorView.getScreenValue()).toBe('11');
    });

    it("displays 2 when 2 button is clicked", function() {
        calculatorView.getTwoButton().trigger("click");

        expect(calculatorView.setScreenValue).toHaveBeenCalledWith('2');
        expect(calculatorView.getScreenValue()).toBe('2');
    });

    it("should post-pend a new 2 when a non-zero number exists in the display", function() {
        calculatorView.setScreenValue(1);
        calculatorView.getTwoButton().trigger("click");

        expect(calculatorView.appendNumber).toHaveBeenCalledWith('2');
        expect(calculatorView.getScreenValue()).toBe('12');
    });

    it("should include . in the display when . is clicked", function() {
        calculatorView.getDotButton().trigger("click");

        expect(calculatorView.appendNumber).toHaveBeenCalledWith(".");
        expect(calculatorView.getScreenValue()).toBe("0.");
    });
});