package demo.steps;

import demo.pages.LoginPage;
import demo.pages.OTPRegisterPages;
import demo.pages.RegisterPage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class RegisterDef {

    LoginPage loginPage = new LoginPage();
    RegisterPage registerPage = new RegisterPage();
    OTPRegisterPages otpRegisterPages = new OTPRegisterPages();

    @Given("User tapped register button on login page")
    public void userTappedRegisterButtonOnLoginPage() {
        loginPage.clickRegisterButton();
    }

    @Given("User is on register page")
    public void userIsOnRegisterPage() {
        boolean displayTitle = registerPage.isOnPage();
        Assert.assertTrue(displayTitle);
    }

    @Given("User input {string} as the name on register page")
    public void userInputAsTheName(String name) {
        registerPage.inputName(name);
    }

    @When("User input {string} as the email on register page")
    public void userInputAsTheEmailOnRegisterPage(String email) {
        registerPage.inputEmail(email);
    }

    @When("User input {string} as the phone number on register page")
    public void userInputAsThePhoneNumberOnRegisterPage(String phone) {
        registerPage.inputPhone(phone);
    }

    @When("User input {string} as the password on register page")
    public void userInputAsThePasswordOnRegisterPage(String password) {
        registerPage.inputPassword(password);
    }

    @When("User input {string} as the repeat of password on register page")
    public void userInputAsTheRepeatOfPasswordOnRegisterPage(String confirmPassword) {
        registerPage.inputRepeatPassword(confirmPassword);
    }

    @When("User tap Register button on register page")
    public void userTapRegisterButtonOnRegisterPage() {
        registerPage.tapRegister();
    }

    @Then("User is on register verification page")
    public void userIsOnRegisterVerificationPage() {
        boolean onVerificationPage = otpRegisterPages.isOnPage();
        Assert.assertTrue(onVerificationPage);
    }

    @Then("User get {string} as the error message on register page")
    public void userGetAsTheErrorMessageOnRegisterPage(String errorMessage) {
        boolean displayErrorMessage = registerPage.getErrorMessage(errorMessage);
        Assert.assertTrue(displayErrorMessage);
    }

    @Then("User is still on register page")
    public void userIsStillOnRegisterPage() {
        boolean stillOnPage = registerPage.isOnPage();
        Assert.assertTrue(stillOnPage);
    }
}
