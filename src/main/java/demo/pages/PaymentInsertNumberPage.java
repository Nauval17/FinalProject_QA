package demo.pages;

import demo.driver.AndroidDriverInstance;
import demo.locators.InsertPhoneNumberLocator;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class PaymentInsertNumberPage implements InsertPhoneNumberLocator {

    WebDriverWait wait = new WebDriverWait(AndroidDriverInstance.androidDriver, 10);

    public boolean isOnPage(){
        return wait.until(ExpectedConditions.presenceOfElementLocated(TEXT_TITLE)).isDisplayed();
    }

    public void inputNumber(String number){
        AndroidElement insertNumber = AndroidDriverInstance.androidDriver.findElement(INPUT_PHONE);
        insertNumber.sendKeys(number);
    }

    public void clickButton(){
        AndroidElement buttonClick = AndroidDriverInstance.androidDriver.findElement(BUTTON_CHECK_BILL);
        buttonClick.click();
    }

}
