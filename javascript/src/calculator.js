var CalculatorView = function() {
	var calculatorView = {};

    calculatorView.getClearButton = function(){
        return $('#keyPad_btnClr');
    };
    calculatorView.getOneButton = function(){
        return $('#keyPad_btn1');
    };
    calculatorView.getOneButtonValue = function(){
        return parseInt(this.getOneButton().html());
    };
    calculatorView.getTwoButton = function(){
        return $('#keyPad_btn2');
    };
    calculatorView.getTwoButtonValue = function(){
        return parseInt(this.getTwoButton().html());
    };
    calculatorView.getScreenValue = function(){
        return parseInt($('#screen').val());
    };
	calculatorView.setScreenValue = function(value){
        return $('#screen').val(value);
    };

	return calculatorView;
}();

var CalculatorController= function() {
    var calculatorController = {};
    var calculatorView;

	calculatorController.initialize = function(view) {
        calculatorView = view;
		calculatorView.getClearButton().on("click", this.clearScreen);
        calculatorView.getOneButton().on("click", {value: calculatorView.getOneButtonValue()}, this.updateScreen);
        calculatorView.getTwoButton().on("click", {value: calculatorView.getTwoButtonValue()}, this.updateScreen);
	};
	
	calculatorController.clearScreen = function(){
		calculatorView.setScreenValue(0);
	};

    calculatorController.updateScreen = function(event){
        if(calculatorView.getScreenValue() == 0) {
            calculatorView.setScreenValue(event.data.value);
        } else {
            calculatorView.setScreenValue(11);
        }
    };

    return calculatorController;
}();



