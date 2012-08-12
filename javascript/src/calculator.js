var CalculatorView= function() {
	var calculatorView = {};
    calculatorView.init = function(){

    };

    calculatorView.getClearButton = function(){
        return $('#keyPad_btnClr');
    };
    calculatorView.getScreenValue = function(){
        return $('#keyPad_UserInput').val();
    };

	return calculatorView;
}();

var CalculatorController= function() {
    var calculatorController = {};
    //var calculatorView = CalculatorView;


    calculatorController.getView = function(){
        return calculatorView;
    };
    return calculatorController;
}();






