package demo.pages;

import demo.driver.AndroidDriverInstance;
import demo.locators.RegisterVerificationLocator;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class OTPRegisterPages implements RegisterVerificationLocator {

    WebDriverWait wait = new WebDriverWait(AndroidDriverInstance.androidDriver, 10);

    public boolean isOnPage(){
        return wait.until(ExpectedConditions.presenceOfElementLocated(TEXT_TITLE))
                .isDisplayed();
    }

//    public void confirmOTP(){
//        AndroidDriverInstance.androidDriver.findElement(BUTTON_CONFIRM_OTP).click();
//    }
//
//    public void resendOTP(){
//        AndroidDriverInstance.androidDriver.findElement(BUTTON_RESEND_OTP).click();
//    }

}
