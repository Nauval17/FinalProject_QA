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
    PaymentSuccessPage successPage = new PaymentSuccessPage();
    PhoneNotFoundPage notFoundPage = new PhoneNotFoundPage();

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

    @And("User choose paystore method")
    public void userChoosePaystoreMethod() {
        methodPage.choosePayStore();
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

    @Then("User see payment success pop up")
    public void userSeePaymentSuccessToast() {
       boolean confirm_success = successPage.successPage();
       Assert.assertTrue(confirm_success);
    }

    @Then("User see error pop up")
    public void userSeeErrorPopUp() {
        notFoundPage.notFoundPopUp();
    }

    @And("User close payment success pop up")
    public void userClickCloseButton() {
        successPage.closePopUp();
    }

    @And("User wait for thirty seconds")
    public void userWaitForThirtySeconds() {
        try {
            otpVerification.resendOTP();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @And("User choose virtual account method")
    public void userChooseVirtualAccountMethod() {
        methodPage.chooseVirtualAccount();
    }
}
