package demo.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface RegisterLocator {

    // Text View
    By TEXT_TITLE = MobileBy.id("tvTitleRegister");
    By TEXT_PHONE_CODE = MobileBy.id("tvRegPhoneCode");

    // Edit Text
    By INPUT_NAME = MobileBy.id("etRegistNama");
    By INPUT_EMAIL = MobileBy.id("etRegistEmail");
    By INPUT_PHONE = MobileBy.id("etRegistHandphone");
    By INPUT_PASSWORD = MobileBy.id("etRegistPassword");
    By INPUT_REPEAT_PASSWORD = MobileBy.id("etRegistRepeatPassword");

    // Button
    By BUTTON_REGISTER = MobileBy.id("btnRegister");
    By BUTTON_BACK = MobileBy.id("");

    // Image View
    By IMAGE_REGISTER = MobileBy.id("ivRegisterImage");

}
