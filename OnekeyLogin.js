describe('Dropdonws demo', function(){
	
	it('Open Angular js website', function(){
		browser.ignoreSynchronization = true
		browser.get("https://onekeytest.milwaukeetool.com");
		browser.manage().addCookie({name:'Mellon', value:'Mellon', domain:'onekeytest.milwaukeetool.com'});
		//browser.ignoreSynchronization = false
		browser.get("https://onekeytest.milwaukeetool.com")
		
		
		
		
		//browser.get("https://onekeytest.milwaukeetool.com")
		
		
		
		
	})
	
	
	
})