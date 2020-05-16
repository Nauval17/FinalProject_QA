package demo.pages;

import demo.driver.AndroidDriverInstance;
import demo.locators.PaymentVerificationLocator;
import io.appium.java_client.android.AndroidElement;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class OTPVerificationPages implements PaymentVerificationLocator {

    WebDriverWait wait = new WebDriverWait(AndroidDriverInstance.androidDriver, 10);

    public boolean isOnPage(){
        return wait.until(ExpectedConditions.presenceOfElementLocated(TEXT_TITLE_PAGE)).isDisplayed();
    }

    public void requestOTP(){
        Response response = RestAssured
                .given()
                .baseUri("http://infinite-waters-35921.herokuapp.com")
                .basePath("/api/paystore/user/otp")
                .header("Content-type","application/json")
                .header("Accept","application/json")
                .post();

        AndroidElement inputOTP = AndroidDriverInstance.androidDriver.findElement(INPUT_OTP);
        inputOTP.sendKeys(response.toString());
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
