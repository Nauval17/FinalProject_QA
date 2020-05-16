package demo.steps;

import demo.pages.HomePage;
import demo.pages.LoginPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class LoginDef {

    LoginPage loginPage = new LoginPage();
    HomePage homePage = new HomePage();

    @Given("User is on app login page")
    public void userIsOnAppLoginPage() {
        boolean actual = loginPage.onLoginPage();
        Assert.assertTrue(actual);
    }

    @When("User input {string} in phone number field")
    public void userInputInPhoneNumberField(String loginPhoneNumber) { loginPage.inputPhoneNumber(loginPhoneNumber);
    }

    @When("User input {string} in password text field")
    public void userInputInPasswordTextField(String loginPassword) { loginPage.inputPassword(loginPassword);
    }

    @When("User click login button")
    public void userClickSignInButton() { loginPage.clickLoginButton();
    }

    @Then("User is on Home Page")
    public void userIsOnHomePage() {
        boolean actual = homePage.onHomePage();
        Assert.assertTrue(actual);
    }

    @Then("User is not on Home Page")
    public void userIsNotOnHomePage() {
        boolean actual = homePage.onHomePage();
        Assert.assertFalse(actual);
    }

/*    @Then("User is not on Home Page")
    public void userIsNotOnHomePage() {
        boolean actual = loginPage.onLoginPage();
        Assert.assertTrue(actual);
    }*/
}
