package demo.steps;

import demo.pages.HomePage;
import demo.pages.PaymentInsertNumberPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class PaymentDef {

    HomePage homePage = new HomePage();
    PaymentInsertNumberPage insertNumberPage = new PaymentInsertNumberPage();


    @When("User choose telkom payment")
    public void userChooseTelkomPayment() {
        homePage.clickTelkomPayment();
    }

    @And("User is on input phone number page")
    public void userIsOnInputPhoneNumberPage() {
        insertNumberPage.isOnPage();
    }

    @And("User input telkom phone number")
    public void userInputTelkomPhoneNumber() {
        insertNumberPage.inputNumber();
    }

    @And("User click cek tagihan button")
    public void userClickCekTagihanButton() {
        insertNumberPage.clickButton();
    }

    @And("User see payment detail")
    public void userSeePaymentDetail() {
    }

    @And("User choose payment method")
    public void userChoosePaymentMethod() {
    }

    @And("User click bayar sekarang button")
    public void userClickBayarSekarangButton() {
    }

    @And("User is on OTP page")
    public void userIsOnOTPPage() {
    }

    @And("User input OTP")
    public void userInputOTP() {
    }

    @And("User click confirm button")
    public void userClickConfirmButton() {
    }

    @Then("User see payment success pop up")
    public void userSeePaymentSuccessPopUp() {
    }

    @And("User click close button")
    public void userClickCloseButton() {
    }

}
