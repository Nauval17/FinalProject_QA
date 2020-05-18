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
    ProfilePage profilePage = new ProfilePage();
    HistoryPage historyPage = new HistoryPage();
    HistoryDetailPage detailHistory = new HistoryDetailPage();

    @When("User choose telkom payment")
    public void userChooseTelkomPayment() {
        homePage.clickTelkomPayment();
    }

    @And("User is on input phone number page")
    public void userIsOnInputPhoneNumberPage() {
        boolean confirm_phone = insertNumberPage.isOnPage();
        Assert.assertTrue(confirm_phone);
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

    @And("User see error pop up")
    public void userSeeErrorPopUp() {
       boolean error_popup = notFoundPage.notFoundPopUp();
       Assert.assertTrue(error_popup);
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

    @And("User click back button on phone number page")
    public void userClickBackButtonOnPhoneNumberPage() {
        insertNumberPage.backButton();
    }

    @And("User click profile menu")
    public void userClickPaystoreBalanceMenu() {
        homePage.clickProfileMenu();
    }

    @And("User is on profile page")
    public void userIsOnProfilePage() {
        boolean confirm_profile = profilePage.onProfilePage();
        Assert.assertTrue(confirm_profile);
    }

    @Then("User log out")
    public void userLogOut() {
        profilePage.logOut();
    }

    @And("User Click History Menu")
    public void userClickHistoryMenu() {
        homePage.clickHistory();
    }

    @And("User is on History")
    public void userIsOnHistory() {
        boolean confirm_history = historyPage.onHistoryPage();
        Assert.assertTrue(confirm_history);
    }

    @And("User click first history")
    public void userClickFirstHistory() {
        historyPage.clickAHistory();
    }

    @And("User is on first history detail")
    public void userIsOnFirstHistoryDetail() {
       boolean confirm_detailHistory = detailHistory.onHistoryDetailPage();
       Assert.assertTrue(confirm_detailHistory);
    }

    @And("User click upload photo")
    public void userClickUploadPhoto() {
        detailHistory.uploadButton();
    }

    @And("User take photo")
    public void userTakePhoto() {
        detailHistory.takePhoto();
    }

    @And("User click bayar button")
    public void userClickBayarButton() {
        detailHistory.payButton();
    }

    @And("User click back button on history detail")
    public void userClickBackButtonOnHistoryDetail() {
        detailHistory.backButton();
    }

    @And("User click back button on history")
    public void userClickBackButtonOnHistory() {
        historyPage.backButton();
    }

    @And("User close error pop up")
    public void userCloseErrorPopUp() {
        notFoundPage.closePopUp();
    }
}
