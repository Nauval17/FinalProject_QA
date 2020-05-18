package demo.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface HistoryDetailLocator {

    // Button
    By BUTTON_PAYMENT = MobileBy.id("btnBayarTagihanHistory");
    By BUTTON_BACK = MobileBy.id("ibBackFromDetailHistory");
    By BUTTON_UPLOAD = MobileBy.id("btnUploadPhoto");
    By BUTTON_TAKE_PHOTO = MobileBy.id("btnTakePhoto");

    // Text View
    By TEXT_TITLE = MobileBy.id("tvTitleRincianHistory");
}
