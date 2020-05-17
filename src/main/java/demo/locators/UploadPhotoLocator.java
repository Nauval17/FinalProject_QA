package demo.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface UploadPhotoLocator {

    // Button
    By BUTTON_UPLOAD_PHOTO = MobileBy.id("btnUploadPhoto");
    By BUTTON_TAKE_PHOTO = MobileBy.id("btnTakePhoto");
}
