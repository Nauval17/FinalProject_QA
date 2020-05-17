package demo.pages;

import demo.driver.AndroidDriverInstance;
import demo.locators.NumberNotFoundLocator;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class PhoneNotFoundPage implements NumberNotFoundLocator {

    WebDriverWait wait = new WebDriverWait(AndroidDriverInstance.androidDriver, 20);

    public boolean notFoundPopUp(){
        return wait.until(ExpectedConditions.presenceOfElementLocated(TEXT_TITLE)).isDisplayed();
    }

    public void closePopUp(){
        AndroidElement close_button = AndroidDriverInstance.androidDriver.findElement(BUTTON_CLOSE);
        close_button.click();
    }
}
