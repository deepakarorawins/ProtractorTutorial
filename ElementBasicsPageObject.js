describe('Protractor Element demo', function(){
	var obj = require("./JsObjectDemoPageObject.js");
	
	beforeEach(function() {
		obj.getUrl();
	})
	
	it('Testing calculator functionality', function(){
		obj.firstInput.sendKeys("3");
		obj.secondInput.sendKeys("5");
		obj.goButton.click();
		
		
		expect(obj.result.getText()).toBe("8");
		
		obj.result.getText().then(function(text){
			console.log(text);
		})
		
	})
	
	afterEach(function() {
		console.log("Test is completed");
	})
	
})