package demo.pages;

import demo.driver.AndroidDriverInstance;
import demo.locators.HomeLocator;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HomePage implements HomeLocator {

    WebDriverWait wait = new WebDriverWait(AndroidDriverInstance.androidDriver, 10);

/*    public boolean onHomePage(){
        return AndroidDriverInstance.androidDriver.findElement(TEXT_WELCOME)
                .isDisplayed();
    }*/

    public boolean onHomePage(){
        return wait.until(ExpectedConditions.presenceOfElementLocated(TEXT_WELCOME))
                .isDisplayed();
    }

    public void clickTelkomPayment(){
        WebElement clickLogo = wait.until(ExpectedConditions.presenceOfElementLocated(BUTTON_TELKOM));
        clickLogo.click();
    }
}
