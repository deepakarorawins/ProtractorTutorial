describe('Chain locators demo', function(){
	
	function add(a, b){ // function is allowed in describe but not in it block
		element(by.model('first')).sendKeys(a);
		element(by.model('second')).sendKeys(b);
		element(by.id('gobutton')).click();
	}
	
	it('Open Angular js website', function(){
		browser.get("http://juliemr.github.io/protractor-demo/")
		
		
		
		add(3, 5);
		add(3, 7);
		add(4, 9);
		
		
		
		element.all(by.repeater("result in memory")).count().then(function(text) {
			console.log(text);
		})
		
		element.all(by.repeater("result in memory")).each(function(item){
			
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log(text);	
		})
		
		})
		
		
		
	})
	
	
	
})