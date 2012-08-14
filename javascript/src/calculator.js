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
    };
    function clickClearButton(event){
        event.data.controller.clearInput();
    }
    function clickOneButton(event){
        event.data.controller.appendNumber("1");
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
        if(this.calculatorModel.getInputValue() == "0"){
            this.calculatorModel.setInputValue(val);
        }else{
            this.calculatorModel.setInputValue(this.calculatorModel.getInputValue().concat(val));
        }
    };

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
