package demo.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface LoginLocator {

    // Text View
    By TEXT_TITLE = MobileBy.id("tvTitleLogin");
    By TEXT_PHONE_CODE = MobileBy.id("tvLoginPhoneCode");

    // Edit Text
    By INPUT_PHONE_NUMBER = MobileBy.id("etLoginHandphone");
    By INPUT_PASSWORD = MobileBy.id("etLoginPassword");

    // Button
    By BUTTON_LOGIN = MobileBy.id("btnLogin");
    By BUTTON_REGISTER = MobileBy.id("btnToRegister");

    // Image View
    By IMAGE_LOGIN = MobileBy.id("ivLoginImage");

}
