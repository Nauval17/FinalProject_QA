package demo.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface NumberNotFoundLocator {

    // Text View
    By TEXT_TITLE = MobileBy.id("tvNotFound");
    By TEXT_DESCRIPTION = MobileBy.id("tvDescriptionNotFound");

    // Button
    By BUTTON_CLOSE = MobileBy.id("btnCloseNotFound");
    By BUTTON_ICON_CLOSE = MobileBy.id("btnIconCloseNotFound");
}
