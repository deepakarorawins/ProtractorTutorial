describe('Protractor Alert steps', function(){
	
	it('Open Non Angular js website', function(){
		
		browser.waitForAngularEnabled(false);
		browser.get("https://www.qaclickacademy.com/practice.php");
		
		element(by.id("confirmbtn")).click().then(function() {
			browser.sleep(2000);
		})
		
		browser.switchTo().alert().accept();
		//browser.switchTo().alert().dismiss();
			
		
	})
	
});