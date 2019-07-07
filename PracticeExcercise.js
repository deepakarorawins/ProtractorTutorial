describe('Protractor Anguler steps', function(){
	
	function selectItems(product){
		element.all(by.tagName("app-card")).each(function(item) {
			item.element(by.css("h4 a")).getText().then(function(text) {
				if(text==product){
					element(by.css("button[class*='btn-info']")).click();
				}
			})
		})
	}
	
	it('Open Angular js website', function(){
		
		//browser.waitForAngularEnabled(false);
		browser.get("https://qaclickacademy.github.io/protocommerce/");
		
		element(by.name("name")).sendKeys("MyStudents");
		element(by.css("input[name='email']")).sendKeys("mystudents@gmail.com");
		element(by.id("exampleInputPassword1")).sendKeys("password2");
		element(by.css("input[type='checkbox']")).click();
		element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
		element.all(by.name("inlineRadioOptions")).first().click();
		element(by.buttonText("Submit")).click().then(function() {
			element(by.css("div[class*='success']")).getText().then(function(text) {
				console.log(text);
				
				element(by.name("name")).clear();
				element(by.name("name")).sendKeys("M").then(function(arg0) {
					element(by.css("[class='alert alert-danger']")).getText().then(function(text) {
						console.log(text);
					})
				})
				
				element(by.linkText("Shop")).click();
				selectItems("Samsung Note 8");
				selectItems("Nokia Edge");
				
				element(by.partialLinkText("Checkout")).getText().then(function(text) {
					console.log(text);
					var result = text.split("(");
					expect(result[1].trim().charAt(0)).toBe("2");
					
					var num = Number(result[1].trim().charAt(0));
					console.log("Converted in to number: " + num);
					
				})
			})
		})
		
		
	})
	
});