var CalculatorView = function() {
	var calculatorView = {};

    calculatorView.getClearButton = function(){
        return $('#keyPad_btnClr');
    };
    calculatorView.getScreenValue = function(){
        return $('#screen').val();
    };
	calculatorView.setScreenValue = function(value){
        return $('#screen').val(value);
    };

	return calculatorView;
}();

var CalculatorController= function() {
    var calculatorController = {};
    var calculatorView = CalculatorView;

	calculatorController.initialize = function() {
		calculatorView.getClearButton().on("click", this.clearScreen);
	};
	
	calculatorController.clearScreen = function(){
		calculatorView.setScreenValue(0);
	};
	
    calculatorController.getView = function() {
        return calculatorView;
    };

    return calculatorController;
}();


$(document).ready(function() {
	var calculator = CalculatorController;
	calculator.initialize();
});



