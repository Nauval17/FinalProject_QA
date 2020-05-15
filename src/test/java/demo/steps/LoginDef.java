package demo.steps;

import demo.pages.LoginPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginDef {

    LoginPage loginPage = new LoginPage();


    @Given("User is on app login page")
    public void userIsOnAppLoginPage() {
    }

    @When("User input {string} in phone number field")
    public void userInputInPhoneNumberField(String loginPhoneNumber) {
    }

    @When("User input {string} in password text field")
    public void userInputInPasswordTextField(String loginPassword) {
    }

    @Then("User is on Home Page")
    public void userIsOnHomePage() {
    }

    @Then("User is not on Home Page")
    public void userIsNotOnHomePage() {
    }
}
