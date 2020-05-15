package demo.pages;

import demo.driver.AndroidDriverInstance;
import demo.locators.PaymentSuccessLocator;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class PaymentSuccessPage implements PaymentSuccessLocator {

    WebDriverWait wait = new WebDriverWait(AndroidDriverInstance.androidDriver, 10);

    public boolean onPaymentSuccessPage(){
        return wait.until(ExpectedConditions.presenceOfElementLocated(TEXT_TITLE)).isDisplayed();
    }

    public void closeButton(){
        AndroidElement close = AndroidDriverInstance.androidDriver.findElement(BUTTON_CLOSE);
        close.click();
    }
}
