describe('Chain locators demo', function() {

	function calc(a, b, op) { // function is allowed in describe but not in it
							// block
		element(by.model('first')).sendKeys(a);
		element(by.model('second')).sendKeys(b);
		
		element.all(by.tagName("Option")).each(function(item) {
			item.getAttribute("value").then(function(value){
				if(value==op){
					item.click();	
				}
				
			})
		})
		
		
		
		
		element(by.id('gobutton')).click();
	}

	it('Open Angular js website', function() {
		browser.get("http://juliemr.github.io/protractor-demo/")

		calc(3, 5, "ADDITION");
		calc(11, 5, "MULTIPLICATION");
		calc(13, 4, "SUBTRACTION");
		
		element.all(by.repeater("result in memory")).each(function(item) {
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log(text);
			})	
		})
		
		element.all(by.tagName("Option")).each(	function(item) {
			item.getAttribute("value").then(function(text){
				console.log(text);
			})
			
		})

	})

})