var CalculatorView = function() {
	var calculatorView = {};

    calculatorView.getClearButton = function(){
        return $('#keyPad_btnClr');
    };
    calculatorView.getOneButton = function(){
        return $('#keyPad_btn1');
    };
    calculatorView.getOneButtonValue = function(){
        return this.getOneButton().html();
    };
    calculatorView.getTwoButton = function(){
        return $('#keyPad_btn2');
    };
    calculatorView.getTwoButtonValue = function(){
        return this.getTwoButton().html();
    };
    calculatorView.getDotButton = function() {
      return $('#keyPad_btnDot');
    };
    calculatorView.getDotButtonValue = function() {
      return ".";
    };
    calculatorView.getScreenValue = function(){
        return $('#screen').val();
    };
	calculatorView.setScreenValue = function(value){
        return $('#screen').val(value);
    };
    calculatorView.appendNumber = function(value) {
        this.setScreenValue(this.getScreenValue().concat(value));
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
        calculatorView.getDotButton().on("click", {value: calculatorView.getDotButtonValue()}, this.updateScreen);
	};
	
	calculatorController.clearScreen = function(){
		calculatorView.setScreenValue('0');
	};

    calculatorController.updateScreen = function(event){
        var value = event.data.value;
        if(calculatorView.getScreenValue() == 0 && value != '.') {
            calculatorView.setScreenValue(value);
        } else {
            calculatorView.appendNumber(value);
        }
    };

    return calculatorController;
}();



