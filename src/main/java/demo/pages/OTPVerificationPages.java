package demo.pages;

import demo.driver.AndroidDriverInstance;
import demo.locators.PaymentVerificationLocator;
import io.appium.java_client.android.AndroidElement;
import io.restassured.RestAssured;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class OTPVerificationPages implements PaymentVerificationLocator {

    WebDriverWait wait = new WebDriverWait(AndroidDriverInstance.androidDriver, 10);

    public boolean isOnPage(){
        return wait.until(ExpectedConditions.presenceOfElementLocated(TEXT_TITLE_PAGE)).isDisplayed();
    }

//    public RestAssured inputOTP(){
//
//        return
//    }

    public void confirmOTP(){
        AndroidElement confirm = AndroidDriverInstance.androidDriver.findElement(BUTTON_CONFIRM);
        confirm.click();
    }

//    public void resendOTP(){
//        AndroidElement resend = AndroidDriverInstance.androidDriver.findElement(BUTTON_RESEND_OTP);
//        resend.click();
//    }
}
