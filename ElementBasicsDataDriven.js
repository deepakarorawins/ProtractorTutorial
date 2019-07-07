describe('Protractor Element demo', function(){
	var obj = require("./JsObjectDemoPageObject.js");
	var using = require('jasmine-data-provider');
	var d = require("./Data.js");
	
	beforeEach(function() {
		obj.getUrl();
	})
	
	// data stores actual data.
	// description stores sub object name.
	// for every iteratino one data set is picked.
	using(d.DataDriven, function(data, description){
	
		it('Testing calculator functionality ' + description, function(){
			obj.firstInput.sendKeys(data.firstinput);
			obj.secondInput.sendKeys(data.secondinput);
			obj.goButton.click();
			
			
			expect(obj.result.getText()).toBe(data.result);
			
			obj.result.getText().then(function(text){
				console.log(text);
			})
			
		})
		
	})
	
	
	
	afterEach(function() {
		console.log("Test is completed");
	})
	
})