describe('Protractor iFrame steps', function(){
	
	it('Open Non Angular js website', function(){
		
		browser.waitForAngularEnabled(false);
		browser.driver.manage().window().maximize();
		browser.get("https://www.qaclickacademy.com/practice.php");
		
		browser.sleep(5000);
		browser.switchTo().frame(element(by.id("courses-iframe")).getWebElement());
		
		
		
		element(by.css("a[href*='sign_in']")).getText().then(function(text) {
			console.log(text);
		})
		
		
		
	})
	
});