describe('Protractor baby steps', function(){
	
	it('Open Angular js website', function(){
		browser.get("http://angularjs.org");
		browser.get("http://juliemr.github.io/protractor-demo/").then(function(){
			console.log("I'm the last step to execute");	
		})
		
		
		
	})
	
	it('Close the browser', function(){
		browser.quit();
		
		
	})
	
});