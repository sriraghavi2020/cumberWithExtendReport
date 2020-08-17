package cucumberJVM;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"src/test/resources/cucumberJVM/features"},
			//	glue = {"StepDefinitions"},
			//  "json:target/cucumber-reports/CucumberTestReport.json", "junit:target/cucumber-reports/cucumber.xml", "html:target/cucumber-html-reports", 
				plugin = {"pretty",  "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:", "json:target/cucumber-reports/CucumberTestReport.json", "junit:target/cucumber-reports/cucumber.xml", "html:target/cucumber-html-reports"},
				monochrome = true,
				dryRun = false
)
public class RunCucumberTest {

}
