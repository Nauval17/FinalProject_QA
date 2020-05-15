package demo.steps;

import demo.pages.*;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class PaymentDef {

    HomePage homePage = new HomePage();
    PaymentInsertNumberPage insertNumberPage = new PaymentInsertNumberPage();
    PaymentDetailPage detailPage = new PaymentDetailPage();
    PaymentMethodPage methodPage = new PaymentMethodPage();
    OTPVerificationPages otpVerification = new OTPVerificationPages();


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
        boolean confirmDetail = detailPage.onPaymentPage();
        Assert.assertTrue(confirmDetail);
    }

    @And("User choose payment method")
    public void userChoosePaymentMethod() {
        detailPage.choosePaymentMethod();
    }

    @And("User choose paystore methode")
    public void userChoosePaystoreMethode() {
        methodPage.choosePayStore();
        methodPage.backButton();
    }

    @And("User click bayar sekarang button")
    public void userClickBayarSekarangButton() {
        detailPage.payButton();
    }

    @And("User is on OTP page")
    public void userIsOnOTPPage() {
        boolean confirmOTP = otpVerification.isOnPage();
        Assert.assertTrue(confirmOTP);
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
