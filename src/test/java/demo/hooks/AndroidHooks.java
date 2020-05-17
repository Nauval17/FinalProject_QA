package demo.hooks;

import demo.driver.AndroidDriverInstance;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

public class AndroidHooks {

    @Before(value = "@Android and @Payment")
    public void initializeWebDriver() {
        AndroidDriverInstance.initialize();
    }

    @After(value = "@Android and @Payment")
    public void quitWebDriver(Scenario scenario) {
        if (scenario.isFailed()) {
            scenario
                    .embed(((TakesScreenshot) AndroidDriverInstance.androidDriver)
                                    .getScreenshotAs(OutputType.BYTES),
                            "image/png");
            scenario.write("Scenario Fail");
        }
        AndroidDriverInstance.quit();
    }
}
