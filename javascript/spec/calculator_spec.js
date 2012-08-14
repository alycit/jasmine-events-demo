describe("CalculatorController", function() {
	it("clears the display when the clear button is pressed", function(){
		affix("input#keyPad_UserInput[value=5]");
        affix("button#keyPad_btnClr");
            var calculatorModel = new CalculatorModel();
            calculatorModel.setInputValue("0");
            var calculatorController = new CalculatorController(calculatorModel);
            var calculatorView = new CalculatorView(calculatorModel,calculatorController);
            calculatorView.initialize();
            calculatorView.getClearButton().trigger("click");
            expect(calculatorView.getInput().val()).toBe('0');
            calculatorModel = null;
            calculatorController = null;
            calculatorView = null;

	});
    //One
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
        calculatorModel = null;
        calculatorController = null;
        calculatorView = null;

    });
    it("adds 1 to the input screen when current value is 0",function(){
        affix("input#keyPad_UserInput[value=0]");
        affix("button#keyPad_btn1");
        var calculatorModel = new CalculatorModel();
        calculatorModel.setInputValue("0");
        var calculatorController = new CalculatorController(calculatorModel);
        var calculatorView = new CalculatorView(calculatorModel, calculatorController);
        calculatorView.initialize();
        calculatorView.getOneButton().trigger("click");
        expect(calculatorView.getInput().val()).toBe('1');
        calculatorModel = null;
        calculatorController = null;
        calculatorView = null;

    });
    //two
    it("adds 2 to the input screen when current value is 5",function(){
        affix("input#keyPad_UserInput[value=5]");
        affix("button#keyPad_btn2");
        var calculatorModel = new CalculatorModel();
        calculatorModel.setInputValue("5");
        var calculatorController = new CalculatorController(calculatorModel);
        var calculatorView = new CalculatorView(calculatorModel, calculatorController);
        calculatorView.initialize();
        calculatorView.getTwoButton().trigger("click");
        expect(calculatorView.getInput().val()).toBe('52');
        calculatorModel = null;
        calculatorController = null;
        calculatorView = null;

    });
    it("adds 2 to the input screen when current value is 0",function(){
        affix("input#keyPad_UserInput[value=0]");
        affix("button#keyPad_btn2");
        var calculatorModel = new CalculatorModel();
        calculatorModel.setInputValue("0");
        var calculatorController = new CalculatorController(calculatorModel);
        var calculatorView = new CalculatorView(calculatorModel, calculatorController);
        calculatorView.initialize();
        calculatorView.getTwoButton().trigger("click");
        expect(calculatorView.getInput().val()).toBe('2');
        calculatorModel = null;
        calculatorController = null;
        calculatorView = null;

    });
    //three
    it("adds 3 to the input screen when current value is 5",function(){
        affix("input#keyPad_UserInput[value=5]");
        affix("button#keyPad_btn3");
        var calculatorModel = new CalculatorModel();
        calculatorModel.setInputValue("5");
        var calculatorController = new CalculatorController(calculatorModel);
        var calculatorView = new CalculatorView(calculatorModel, calculatorController);
        calculatorView.initialize();
        calculatorView.getThreeButton().trigger("click");
        expect(calculatorView.getInput().val()).toBe('53');
        calculatorModel = null;
        calculatorController = null;
        calculatorView = null;

    });
    it("adds 3 to the input screen when current value is 0",function(){
        affix("input#keyPad_UserInput[value=0]");
        affix("button#keyPad_btn3");
        var calculatorModel = new CalculatorModel();
        calculatorModel.setInputValue("0");
        var calculatorController = new CalculatorController(calculatorModel);
        var calculatorView = new CalculatorView(calculatorModel, calculatorController);
        calculatorView.initialize();
        calculatorView.getThreeButton().trigger("click");
        expect(calculatorView.getInput().val()).toBe('3');
        calculatorModel = null;
        calculatorController = null;
        calculatorView = null;

    });
    //four
    it("adds 4 to the input screen when current value is 5",function(){
        affix("input#keyPad_UserInput[value=5]");
        affix("button#keyPad_btn4");
        var calculatorModel = new CalculatorModel();
        calculatorModel.setInputValue("5");
        var calculatorController = new CalculatorController(calculatorModel);
        var calculatorView = new CalculatorView(calculatorModel, calculatorController);
        calculatorView.initialize();
        calculatorView.getFourButton().trigger("click");
        expect(calculatorView.getInput().val()).toBe('54');
        calculatorModel = null;
        calculatorController = null;
        calculatorView = null;

    });
    it("adds 4 to the input screen when current value is 0",function(){
        affix("input#keyPad_UserInput[value=0]");
        affix("button#keyPad_btn4");
        var calculatorModel = new CalculatorModel();
        calculatorModel.setInputValue("0");
        var calculatorController = new CalculatorController(calculatorModel);
        var calculatorView = new CalculatorView(calculatorModel, calculatorController);
        calculatorView.initialize();
        calculatorView.getFourButton().trigger("click");
        expect(calculatorView.getInput().val()).toBe('4');
        calculatorModel = null;
        calculatorController = null;
        calculatorView = null;

    });
    //five
    it("adds 5 to the input screen when current value is 5",function(){
        affix("input#keyPad_UserInput[value=5]");
        affix("button#keyPad_btn5");
        var calculatorModel = new CalculatorModel();
        calculatorModel.setInputValue("5");
        var calculatorController = new CalculatorController(calculatorModel);
        var calculatorView = new CalculatorView(calculatorModel, calculatorController);
        calculatorView.initialize();
        calculatorView.getFiveButton().trigger("click");
        expect(calculatorView.getInput().val()).toBe('55');
        calculatorModel = null;
        calculatorController = null;
        calculatorView = null;

    });
    it("adds 5 to the input screen when current value is 0",function(){
        affix("input#keyPad_UserInput[value=0]");
        affix("button#keyPad_btn5");
        var calculatorModel = new CalculatorModel();
        calculatorModel.setInputValue("0");
        var calculatorController = new CalculatorController(calculatorModel);
        var calculatorView = new CalculatorView(calculatorModel, calculatorController);
        calculatorView.initialize();
        calculatorView.getFiveButton().trigger("click");
        expect(calculatorView.getInput().val()).toBe('5');
        calculatorModel = null;
        calculatorController = null;
        calculatorView = null;

    });
//six
    it("adds 6 to the input screen when current value is 5",function(){
        affix("input#keyPad_UserInput[value=5]");
        affix("button#keyPad_btn6");
        var calculatorModel = new CalculatorModel();
        calculatorModel.setInputValue("5");
        var calculatorController = new CalculatorController(calculatorModel);
        var calculatorView = new CalculatorView(calculatorModel, calculatorController);
        calculatorView.initialize();
        calculatorView.getSixButton().trigger("click");
        expect(calculatorView.getInput().val()).toBe('56');
        calculatorModel = null;
        calculatorController = null;
        calculatorView = null;

    });
    it("adds 6 to the input screen when current value is 0",function(){
        affix("input#keyPad_UserInput[value=0]");
        affix("button#keyPad_btn6");
        var calculatorModel = new CalculatorModel();
        calculatorModel.setInputValue("0");
        var calculatorController = new CalculatorController(calculatorModel);
        var calculatorView = new CalculatorView(calculatorModel, calculatorController);
        calculatorView.initialize();
        calculatorView.getSixButton().trigger("click");
        expect(calculatorView.getInput().val()).toBe('6');
        calculatorModel = null;
        calculatorController = null;
        calculatorView = null;

    });
//seven
    it("adds 7 to the input screen when current value is 5",function(){
        affix("input#keyPad_UserInput[value=5]");
        affix("button#keyPad_btn7");
        var calculatorModel = new CalculatorModel();
        calculatorModel.setInputValue("5");
        var calculatorController = new CalculatorController(calculatorModel);
        var calculatorView = new CalculatorView(calculatorModel, calculatorController);
        calculatorView.initialize();
        calculatorView.getSevenButton().trigger("click");
        expect(calculatorView.getInput().val()).toBe('57');
        calculatorModel = null;
        calculatorController = null;
        calculatorView = null;

    });
    it("adds 7 to the input screen when current value is 0",function(){
        affix("input#keyPad_UserInput[value=0]");
        affix("button#keyPad_btn7");
        var calculatorModel = new CalculatorModel();
        calculatorModel.setInputValue("0");
        var calculatorController = new CalculatorController(calculatorModel);
        var calculatorView = new CalculatorView(calculatorModel, calculatorController);
        calculatorView.initialize();
        calculatorView.getSevenButton().trigger("click");
        expect(calculatorView.getInput().val()).toBe('7');
        calculatorModel = null;
        calculatorController = null;
        calculatorView = null;

    });
//eight
    it("adds 8 to the input screen when current value is 5",function(){
        affix("input#keyPad_UserInput[value=5]");
        affix("button#keyPad_btn8");
        var calculatorModel = new CalculatorModel();
        calculatorModel.setInputValue("5");
        var calculatorController = new CalculatorController(calculatorModel);
        var calculatorView = new CalculatorView(calculatorModel, calculatorController);
        calculatorView.initialize();
        calculatorView.getEightButton().trigger("click");
        expect(calculatorView.getInput().val()).toBe('58');
        calculatorModel = null;
        calculatorController = null;
        calculatorView = null;

    });
    it("adds 8 to the input screen when current value is 0",function(){
        affix("input#keyPad_UserInput[value=0]");
        affix("button#keyPad_btn8");
        var calculatorModel = new CalculatorModel();
        calculatorModel.setInputValue("0");
        var calculatorController = new CalculatorController(calculatorModel);
        var calculatorView = new CalculatorView(calculatorModel, calculatorController);
        calculatorView.initialize();
        calculatorView.getEightButton().trigger("click");
        expect(calculatorView.getInput().val()).toBe('8');
        calculatorModel = null;
        calculatorController = null;
        calculatorView = null;

    });
//nine
    it("adds 9 to the input screen when current value is 5",function(){
        affix("input#keyPad_UserInput[value=5]");
        affix("button#keyPad_btn9");
        var calculatorModel = new CalculatorModel();
        calculatorModel.setInputValue("5");
        var calculatorController = new CalculatorController(calculatorModel);
        var calculatorView = new CalculatorView(calculatorModel, calculatorController);
        calculatorView.initialize();
        calculatorView.getNineButton().trigger("click");
        expect(calculatorView.getInput().val()).toBe('59');
        calculatorModel = null;
        calculatorController = null;
        calculatorView = null;

    });
    it("adds 9 to the input screen when current value is 0",function(){
        affix("input#keyPad_UserInput[value=0]");
        affix("button#keyPad_btn9");
        var calculatorModel = new CalculatorModel();
        calculatorModel.setInputValue("0");
        var calculatorController = new CalculatorController(calculatorModel);
        var calculatorView = new CalculatorView(calculatorModel, calculatorController);
        calculatorView.initialize();
        calculatorView.getNineButton().trigger("click");
        expect(calculatorView.getInput().val()).toBe('9');
        calculatorModel = null;
        calculatorController = null;
        calculatorView = null;

    });
//zero
    it("adds 0 to the input screen when current value is 5",function(){
        affix("input#keyPad_UserInput[value=5]");
        affix("button#keyPad_btn0");
        var calculatorModel = new CalculatorModel();
        calculatorModel.setInputValue("5");
        var calculatorController = new CalculatorController(calculatorModel);
        var calculatorView = new CalculatorView(calculatorModel, calculatorController);
        calculatorView.initialize();
        calculatorView.getZeroButton().trigger("click");
        expect(calculatorView.getInput().val()).toBe('50');
        calculatorModel = null;
        calculatorController = null;
        calculatorView = null;

    });
    it("adds 0 to the input screen when current value is 0",function(){
        affix("input#keyPad_UserInput[value=0]");
        affix("button#keyPad_btn0");
        var calculatorModel = new CalculatorModel();
        calculatorModel.setInputValue("0");
        var calculatorController = new CalculatorController(calculatorModel);
        var calculatorView = new CalculatorView(calculatorModel, calculatorController);
        calculatorView.initialize();
        calculatorView.getZeroButton().trigger("click");
        expect(calculatorView.getInput().val()).toBe('0');
        calculatorModel = null;
        calculatorController = null;
        calculatorView = null;

    });
//Dot
    it("adds . to the input screen when current value is 5",function(){
        affix("input#keyPad_UserInput[value=5]");
        affix("button#keyPad_btnDot");
        var calculatorModel = new CalculatorModel();
        calculatorModel.setInputValue("5");
        var calculatorController = new CalculatorController(calculatorModel);
        var calculatorView = new CalculatorView(calculatorModel, calculatorController);
        calculatorView.initialize();
        calculatorView.getDotButton().trigger("click");
        expect(calculatorView.getInput().val()).toBe('5.');
        calculatorModel = null;
        calculatorController = null;
        calculatorView = null;

    });
    it("adds . to the input screen when current value is 0",function(){
        affix("input#keyPad_UserInput[value=0]");
        affix("button#keyPad_btnDot");
        var calculatorModel = new CalculatorModel();
        calculatorModel.setInputValue("0");
        var calculatorController = new CalculatorController(calculatorModel);
        var calculatorView = new CalculatorView(calculatorModel, calculatorController);
        calculatorView.initialize();
        calculatorView.getDotButton().trigger("click");
        expect(calculatorView.getInput().val()).toBe('0.');
        calculatorModel = null;
        calculatorController = null;
        calculatorView = null;

    });
//InverseSign
    it("change the sign of the input to positive",function(){
        affix("input#keyPad_UserInput[value=-5]");
        affix("button#keyPad_btnInverseSign");
        var calculatorModel = new CalculatorModel();
        calculatorModel.setInputValue("-5");
        var calculatorController = new CalculatorController(calculatorModel);
        var calculatorView = new CalculatorView(calculatorModel, calculatorController);
        calculatorView.initialize();
        calculatorView.getInverseSignButton().trigger("click");
        expect(calculatorView.getInput().val()).toBe('5');
        calculatorModel = null;
        calculatorController = null;
        calculatorView = null;

    });
    it("Change the sign of the input to negative",function(){
        affix("input#keyPad_UserInput[value=5]");
        affix("button#keyPad_btnInverseSign");
        var calculatorModel = new CalculatorModel();
        calculatorModel.setInputValue("5");
        var calculatorController = new CalculatorController(calculatorModel);
        var calculatorView = new CalculatorView(calculatorModel, calculatorController);
        calculatorView.initialize();
        calculatorView.getInverseSignButton().trigger("click");
        expect(calculatorView.getInput().val()).toBe('-5');
        calculatorModel = null;
        calculatorController = null;
        calculatorView = null;

    });
    it("Does nothing when input is Zero",function(){
        affix("input#keyPad_UserInput[value=0]");
        affix("button#keyPad_btnInverseSign");
        var calculatorModel = new CalculatorModel();
        calculatorModel.setInputValue("0");
        var calculatorController = new CalculatorController(calculatorModel);
        var calculatorView = new CalculatorView(calculatorModel, calculatorController);
        calculatorView.initialize();
        calculatorView.getInverseSignButton().trigger("click");
        expect(calculatorView.getInput().val()).toBe('0');
        calculatorModel = null;
        calculatorController = null;
        calculatorView = null;

    });
});
