package demo.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface ProfileLocator {

    // Text View
    By TEXT_USERNAME = MobileBy.id("tvUserName");
    By TEXT_USER_PHONE = MobileBy.id("tvUserPhone");
    By TEXT_USER_EMAIL = MobileBy.id("tvUserEmail");
    By TEXT_TITLE_WALLET = MobileBy.id("tvUserTitleWallet");
    By TEXT_VALUE_WALLET = MobileBy.id("tvUserValueWallet");

    // Button
    By BUTTON_LOGOUT = MobileBy.id("btnLogout");
    By BUTTON_BACK = MobileBy.id("ibBackFromProfil");

    // Image View
    By IMAGE_USER = MobileBy.id("ivUserProfile");
    By IMAGE_WALLET = MobileBy.id("ivUserWallet");

}
