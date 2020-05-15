package demo.pages;

import demo.driver.AndroidDriverInstance;
import demo.locators.HomeLocator;
import demo.locators.LoginLocator;
import io.appium.java_client.MobileBy;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage implements LoginLocator, HomeLocator {

    WebDriverWait wait = new WebDriverWait(AndroidDriverInstance.androidDriver, 10);

    public boolean onLoginPage() {
        return AndroidDriverInstance.androidDriver.findElement(TEXT_TITLE)
                .isDisplayed();
    }

    public void inputPhoneNumber(String phoneNumber) {
        AndroidElement inputPhoneNumber = AndroidDriverInstance.androidDriver
                .findElement(INPUT_PHONE_NUMBER);
        inputPhoneNumber.sendKeys(phoneNumber);
    }

    public void inputPassword(String password) {
        AndroidElement inputPassword = AndroidDriverInstance.androidDriver
                .findElement(INPUT_PASSWORD);
        inputPassword.sendKeys(password);
    }

    public void clickLoginButton() {
        AndroidElement buttonLogin = AndroidDriverInstance.androidDriver
                .findElement(BUTTON_LOGIN);
        buttonLogin.click();
    }

    public void clickRegisterButton() {
        AndroidElement buttonRegister = AndroidDriverInstance.androidDriver
                .findElement(BUTTON_REGISTER);
        buttonRegister.click();
    }
}