describe('Protractor Actions', function(){
	
	it('Open posse.com angular website', function(){
		browser.get("https://posse.com/");
		element(by.model("userInputQuery")).sendKeys("lunch");
		//browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("london")).perform();
		
		// incomplete below is not working
		//browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		
		//browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function() {
		//	browser.sleep(5000);
		//})
		
		element(by.css("button[type='submit']")).click().then(function() {
			browser.sleep(1000);
			
			//element.all(by.css("div[ng-mouseover='onSearchResultOver(searchResult)']"))
			expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(2); // observe * as regular expression.
			//expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(1); // Will fail
			
			//element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
			element(by.css("a[ng-href*='/place/id/62435']")).click().then(function() {
				
				browser.getTitle().then(function(title) {
					console.log(title + " is the Title of page before switching")
					
				})
				
				browser.getAllWindowHandles().then(function(handles) {
					
					browser.switchTo().window(handles[1]);
					
					browser.getTitle().then(function(title) {
						console.log(title + " is the Title of page after switching")
						
						browser.switchTo().window(handles[0]);
					
					browser.getTitle().then(function(title) {
						console.log(title + " is the Title of page after switching back to parent")
						
					})
					})
					
				})	
			})
		})
		
	})
	
	
	
});