package demo.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface InsertPhoneNumberLocator {

    // Text View
    By TEXT_TITLE = MobileBy.id("tvTitleTagihanTelefon");

    // Edit Text
    By INPUT_PHONE = MobileBy.id("etNomorTelepon");

    // Button
    By BUTTON_BACK = MobileBy.id("ibBackFromTagihan");
    By BUTTON_CHECK_BILL = MobileBy.id("btnCekTagihan");

}
