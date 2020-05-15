package demo.pages;

import demo.driver.AndroidDriverInstance;
import demo.locators.PhoneBillDetailLocator;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class PaymentDetailPage implements PhoneBillDetailLocator {

    WebDriverWait wait = new WebDriverWait(AndroidDriverInstance.androidDriver, 10);

    public boolean onPaymentPage(){
        return wait.until(ExpectedConditions.presenceOfElementLocated(TEXT_TITLE_PAGE)).isDisplayed();
    }

    public void choosePaymentMethod(){
        AndroidElement methodClick = AndroidDriverInstance.androidDriver.findElement(BUTTON_CHOOSE_METHOD);
        methodClick.click();
    }

    public boolean getName(){
        String name = AndroidDriverInstance.androidDriver.findElement(TEXT_USERNAME).getText();
        return Boolean.getBoolean(name);
    }

    public String getNominal(){
        return AndroidDriverInstance.androidDriver.findElement(TEXT_TITLE_NOMINAL).getText();
    }

    public String getAdmin(){
        return AndroidDriverInstance.androidDriver.findElement(TEXT_ADMIN_NOMINAL).getText();
    }

    public void payButton(){
        AndroidElement pay = AndroidDriverInstance.androidDriver.findElement(BUTTON_PAY);
        pay.click();
    }

}
