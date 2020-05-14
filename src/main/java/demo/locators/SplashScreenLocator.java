package demo.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface SplashScreenLocator {

    // Image View
    By IMAGE_TITLE = MobileBy.id("ivTitleApps");
    By IMAGE_CIRCLE_TOP = MobileBy.id("ivCircleSplashTop");
    By IMAGE_CIRCLE_BOTTOM = MobileBy.id("ivCircleSplashBottom");

}
