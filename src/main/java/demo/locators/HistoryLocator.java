package demo.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface HistoryLocator {

    // Text View
    By TEXT_TITLE = MobileBy.id("tvTitleHistory");

    // Button
    By BUTTON_BACK = MobileBy.id("ibBackFromHistory");

    // Recycle View
    By RECYCLE_ITEM_1 = MobileBy.id("item[0]");
    By RECYCLE_ITEM_2 = MobileBy.id("item[1]");

    // Element Inside Recycle View
    // Text View
    By TEXT_NOMINAL = MobileBy.id("tvHistoryNominal");
    By TEXT_TIME = MobileBy.id("tvHistoryTime");
    By TEXT_STATUS = MobileBy.id("tvHistoryStatus");
    // Image View
    By IMAGE_PHONE_ICON = MobileBy.id("ivIconHistory");
}
