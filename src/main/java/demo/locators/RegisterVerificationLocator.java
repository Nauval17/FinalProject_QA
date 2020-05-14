package demo.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface RegisterVerificationLocator {

    // Text View
    By TEXT_TITLE = MobileBy.id("tvRegVerificationNumber");
    By TEXT_TIMER_OTP = MobileBy.id("tvTimerOTP");

    // Edit Text
    By INPUT_OTP = MobileBy.id("etRegOTPNumber");

    // Button
    By BUTTON_RESEND_OTP = MobileBy.id("btnResend");
    By BUTTON_CONFIRM_OTP = MobileBy.id("btnRegConfirmOTP");

}
