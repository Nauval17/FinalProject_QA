package demo;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        stepNotifications = true,
        plugin = {"json:build/cucumber.json", "pretty", "html:build/result"},
        features = {"src/test/resources/features"},
<<<<<<< HEAD
        tags = {"@Register"}
=======
        tags = {"@Android and @Payment"}
>>>>>>> f1acf05e8a020820a8c31d2f39abb381f93c80dc
)
public class CucumberRunner {
}
