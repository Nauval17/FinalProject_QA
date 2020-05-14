package demo.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface PaymentSuccessLocator {

    // Text View
    By TEXT_TITLE = MobileBy.id("tvPaymentSucces");

    // Button
    By BUTTON_CLOSE = MobileBy.id("btnCloseSucces");
    By BUTTON_ICON_CLOSE = MobileBy.id("btnIconCloseSucces");
}
