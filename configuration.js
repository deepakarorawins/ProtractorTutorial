var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
	// webdriver-manager start // to start selenium server
	//seleniumAddress : 'http://localhost:4444/wd/hub', // we can start our test
														// without starting
														// selenium servr but we
														// need to comment this
														// line
	specs : [ 'ElementBasicsDataDriven.js' ],

	// capabilities: {
	// 'browserName': 'firefox' //chrome is default
	// }

	onPrepare : function() {
		browser.driver.manage().window().maximize();

		jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
			savePath : 'target/screenshots'
		}))
	},
	
	suites: {
		Smoke: ['Alerts.js', 'Dropdowns.js'],
		Regression: 'ElementBasicsDataDriven.js' // for single no need to provide brackets.
	},
	
	jasmineNodeOpts: {
		showColors: true, // Use colors in command line report.
	}
};