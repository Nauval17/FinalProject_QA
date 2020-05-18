package demo.pages;

import demo.driver.AndroidDriverInstance;
import demo.locators.ProfileLocator;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ProfilePage implements ProfileLocator {
    WebDriverWait wait = new WebDriverWait(AndroidDriverInstance.androidDriver, 20);

    public boolean onProfilePage(){
        return wait.until(ExpectedConditions.presenceOfElementLocated(TEXT_USERNAME))
                .isDisplayed();
    }

    public void logOut(){
        WebElement clickLogOut = wait.until(ExpectedConditions.presenceOfElementLocated(BUTTON_LOGOUT));
        clickLogOut.click();
    }
}
