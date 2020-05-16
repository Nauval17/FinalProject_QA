package demo.steps;

import demo.controller.OTPController;
import demo.pages.*;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.response.Response;
import org.junit.Assert;

public class PaymentDef {

    OTPController controller = new OTPController();
    HomePage homePage = new HomePage();
    PaymentInsertNumberPage insertNumberPage = new PaymentInsertNumberPage();
    PaymentDetailPage detailPage = new PaymentDetailPage();
    PaymentMethodPage methodPage = new PaymentMethodPage();
    OTPVerificationPages otpVerification = new OTPVerificationPages();
    PaymentSuccessPage successPage = new PaymentSuccessPage();

    @When("User choose telkom payment")
    public void userChooseTelkomPayment() {
        homePage.clickTelkomPayment();
    }

    @And("User is on input phone number page")
    public void userIsOnInputPhoneNumberPage() {
        insertNumberPage.isOnPage();
    }

    @And("User input telkom phone number {string}")
    public void userInputTelkomPhoneNumber(String number) {
        insertNumberPage.inputNumber(number);
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
//        methodPage.backButton();
    }

    @And("User click bayar sekarang button")
    public void userClickBayarSekarangButton() {
        detailPage.payButton();
    }

    @And("User is on OTP page")
    public void userIsOnOTPPage() {
        otpVerification.isOnPage();
    }

    @And("User input OTP")
    public void userInputOTP() {
        String otp = otpVerification.requestOTP();
        otpVerification.inputOTP(otp);
        otpVerification.inputOTP(otp);
    }

    @And("User click confirm button")
    public void userClickConfirmButton() {
        otpVerification.confirmOTP();
    }

    @Then("User see payment success toast")
    public void userSeePaymentSuccessToast() {

    }

}
