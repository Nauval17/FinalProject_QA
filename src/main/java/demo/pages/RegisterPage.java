package demo.pages;

import demo.driver.AndroidDriverInstance;
import demo.locators.RegisterLocator;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class RegisterPage implements RegisterLocator {

    WebDriverWait wait = new WebDriverWait(AndroidDriverInstance.androidDriver, 10);

    public void typeOn(By element, String keys) {
        AndroidDriverInstance.androidDriver.findElement(element).sendKeys(keys);
    }

    public void clickOn(By element) {
        AndroidDriverInstance.androidDriver.findElement(element).click();
    }

    public boolean isOnPage() {
        return wait.until(ExpectedConditions.presenceOfElementLocated(TEXT_TITLE)).isDisplayed();
    }

    public void inputName(String name) {
        typeOn(INPUT_NAME, name);
    }

    public void inputEmail(String email) {
        typeOn(INPUT_EMAIL, email);
    }

    public void inputPhone(String phone) {
        typeOn(INPUT_PHONE, phone);
    }

    public void inputPassword(String password) {
        typeOn(INPUT_PASSWORD, password);
    }

    public void inputRepeatPassword(String repeatPassword) {
        typeOn(INPUT_REPEAT_PASSWORD, repeatPassword);
    }

    public void tapRegister() {
        clickOn(BUTTON_REGISTER);
    }

//    public boolean getErrorMessage() {
//        WebDriverWait wait = new WebDriverWait(AndroidDriverInstance.androidDriver, 30);
//        WebElement errorMessage = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("")));
//        return errorMessage.isDisplayed();
//    }


}
