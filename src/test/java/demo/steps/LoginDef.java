package demo.steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.When;

public class LoginDef {
    @When("User input {string} in phone number field")
    public void userInputInPhoneNumberField(String loginPhoneNumber) {
    }

    @When("User input {string} in password text field")
    public void userInputInPasswordTextField(String loginPassword) {
    }
}
