package demo.pages;

import demo.driver.AndroidDriverInstance;
import demo.locators.RegisterVerificationLocator;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class OTPRegisterPages implements RegisterVerificationLocator {

    WebDriverWait wait = new WebDriverWait(AndroidDriverInstance.androidDriver, 10);

    public boolean isOnPage(){
        return wait.until(ExpectedConditions.presenceOfElementLocated(TEXT_TITLE))
                .isDisplayed();
    }

//    public RestAssured inputOTP(){
//
//        return
//    }

//    public void confirmOTP(){
//        AndroidElement confirm = AndroidDriverInstance.androidDriver.findElement(BUTTON_CONFIRM_OTP);
//        confirm.click();
//    }
//
//    public void resendOTP(){
//        AndroidElement resend = AndroidDriverInstance.androidDriver.findElement(BUTTON_RESEND_OTP);
//        resend.click();
//    }

}
