Feature: TargetAus feature 


Scenario Outline: TargetAus login page test 
	Given Already in loging page 
	When confirm login page 
	Then enter user name "<username>" 
	And enter password "<password>" 
	Then press login button 
	Then close the browser
	
	
	
	Examples: 
		|username|password|
		|sriraghavi2020@gmail.com|sriraghavi|
		|kiki@gmail.com|kiti|