var calculator_spec_helper = function () {
    var calculatorView;
    var calculator;

    return {
        initializeCalcView:function () {
            calculatorView = CalculatorView;
            spyOn(calculatorView, 'setScreenValue').andCallThrough();
            spyOn(calculatorView, 'getOneButtonValue').andReturn(1);
            spyOn(calculatorView, 'getTwoButtonValue').andReturn(2);
            return calculatorView;
        },
        initializeCalculator:function () {
            calculator = CalculatorController;
            spyOn(calculator, 'clearScreen').andCallThrough();
            calculator.initialize(calculatorView);
            return calculator;
        }
    };

}();