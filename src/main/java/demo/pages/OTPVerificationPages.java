package demo.pages;

import demo.driver.AndroidDriverInstance;
import demo.locators.PaymentVerificationLocator;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class OTPVerificationPages implements PaymentVerificationLocator {

    WebDriverWait wait = new WebDriverWait(AndroidDriverInstance.androidDriver, 3);

    public void isOnPage(){
        wait.until(ExpectedConditions.presenceOfElementLocated(TEXT_TITLE_PAGE));
    }

    public String requestOTP(){
        WebElement toastView = AndroidDriverInstance.androidDriver.findElement(By.xpath("//android.widget.Toast[1]"));
        return toastView.getText();
    }

    public void inputOTP(String otp){
        AndroidElement input = AndroidDriverInstance.androidDriver.findElement(INPUT_OTP);
        input.sendKeys(otp);
    }

    public void confirmOTP(){
        AndroidElement confirm = AndroidDriverInstance.androidDriver.findElement(BUTTON_CONFIRM);
        confirm.click();
    }

//    public void resendOTP(){
//        AndroidElement resend = AndroidDriverInstance.androidDriver.findElement(BUTTON_RESEND_OTP);
//        resend.click();
//    }
}
