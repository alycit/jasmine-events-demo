var CalculatorView= function(model,controller) {
    //MVC
    this.calculatorModel = model;
    this.calculatorController = controller;
    var _this = this;



    this.getModel = function(){
     return this.calculatorModel;
    };
    this.getController = function(){
      return this.calculatorController;
    };
    this.getClearButton = function(){
        return $('#keyPad_btnClr');
    };
    this.getOneButton = function(){
        return $('#keyPad_btn1');
    };
    this.getTwoButton = function(){
        return $('#keyPad_btn2');
    };
    this.getThreeButton = function(){
        return $('#keyPad_btn3');
    };
    this.getFourButton = function(){
        return $('#keyPad_btn4');
    };
    this.getFiveButton = function(){
        return $('#keyPad_btn5');
    };
    this.getSixButton = function(){
        return $('#keyPad_btn6');
    };
    this.getSevenButton = function(){
        return $('#keyPad_btn7');
    };
    this.getEightButton = function(){
        return $('#keyPad_btn8');
    };
    this.getNineButton = function(){
        return $('#keyPad_btn9');
    };
    this.getZeroButton = function(){
        return $('#keyPad_btn0');
    };
    this.getDotButton = function(){
        return $('#keyPad_btnDot');
    };
    this.getInverseSignButton = function(){
        return $('#keyPad_btnInverseSign');
    };

    this.getInput = function(){
        return $('#keyPad_UserInput');
    };
    //event listener
    this.calculatorModel.updated.attach(function () {
        _this.getInput().val(_this.getModel().getInputValue());
    });

//initialize
    this.initialize = function(){

        this.getClearButton().click({controller: this.getController()}, clickClearButton);
        this.getOneButton().click({controller: this.getController()}, clickOneButton);
        this.getTwoButton().click({controller: this.getController()}, clickTwoButton);
        this.getThreeButton().click({controller: this.getController()}, clickThreeButton);
        this.getFourButton().click({controller: this.getController()}, clickFourButton);
        this.getFiveButton().click({controller: this.getController()}, clickFiveButton);
        this.getSixButton().click({controller: this.getController()}, clickSixButton);
        this.getSevenButton().click({controller: this.getController()}, clickSevenButton);
        this.getEightButton().click({controller: this.getController()}, clickEightButton);
        this.getNineButton().click({controller: this.getController()}, clickNineButton);
        this.getZeroButton().click({controller: this.getController()}, clickZeroButton);
        this.getDotButton().click({controller: this.getController()}, clickDotButton);
        this.getInverseSignButton().click({controller: this.getController()}, clickInverseSignButton);

    };
    function clickClearButton(event){
        event.data.controller.clearInput();
    }
    function clickOneButton(event){
        event.data.controller.appendNumber("1");
    }
    function clickTwoButton(event){
        event.data.controller.appendNumber("2");
    }
    function clickThreeButton(event){
        event.data.controller.appendNumber("3");
    }
    function clickFourButton(event){
        event.data.controller.appendNumber("4");
    }
    function clickFiveButton(event){
        event.data.controller.appendNumber("5");
    }
    function clickSixButton(event){
        event.data.controller.appendNumber("6");
    }
    function clickSevenButton(event){
        event.data.controller.appendNumber("7");
    }
    function clickEightButton(event){
        event.data.controller.appendNumber("8");
    }
    function clickNineButton(event){
        event.data.controller.appendNumber("9");
    }
    function clickZeroButton(event){
        event.data.controller.appendNumber("0");
    }
    function clickDotButton(event){
        event.data.controller.appendNumber(".");
    }
    function clickInverseSignButton(event){
        event.data.controller.invertSign();
    }

};

var CalculatorController= function(model) {
    //MVC
    this.calculatorModel = model;

    this.getModel = function() {
        return this.calculatorModel;
    };
    //members
    this.clearInput= function(){
        //localModel = this.getModel();
        this.calculatorModel.setInputValue("0");
        this.calculatorModel.setOperand("");
        this.calculatorModel.setStoredValue("");
    };
    this.appendNumber= function(val){
        if(this.calculatorModel.getInputValue() == "0" && !(val == ".")){
                this.calculatorModel.setInputValue(val);
        }else{
            this.calculatorModel.setInputValue(this.calculatorModel.getInputValue().concat(val));
        }
    };
    this.invertSign = function(){
        if(this.calculatorModel.getInputValue().charAt(0) == "-"){
            this.calculatorModel.setInputValue(this.calculatorModel.getInputValue().replace("-",""));
        }else{
            if(!(this.calculatorModel.getInputValue() == "0")){
                this.calculatorModel.setInputValue("-".concat(this.calculatorModel.getInputValue()));
            }
        }
    }

};

var CalculatorModel= function(){

    this.inputValue = "";
    this.operand = "";
    this.storedvalue = "";

    //members
    this.setInputValue = function(xInput){
        this.inputValue = xInput;
        this.updated.notify();
    };
    this.getInputValue = function(){
        return this.inputValue;
    };
    this.setOperand = function(xOperand){
        this.operand = xOperand;
    };
    this.setStoredValue = function(xValue){
        this.storedvalue = xValue;
    };

    this.updated = new Event();
};



var Event = function (sender) {
    this._sender = sender;
    this._listeners = [];
};

Event.prototype = {
    attach : function (listener) {
        this._listeners.push(listener);
    },
    notify : function (args) {
        for (var i = 0; i < this._listeners.length; i++) {
            this._listeners[i](this._sender, args);
        }
    }
};
