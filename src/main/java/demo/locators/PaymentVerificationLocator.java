package demo.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface PaymentVerificationLocator {

    // Text View
    By TEXT_TITLE_PAGE = MobileBy.id("tvVerificationNumberPayment");

    // Edit Text
    By INPUT_OTP = MobileBy.id("etOTPNumberPayment");

    // Button
    By BUTTON_CONFIRM = MobileBy.id("btnConfirmOTPPayment");
}
