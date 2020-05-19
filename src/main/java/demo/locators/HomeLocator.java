package demo.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface HomeLocator {

    // Text View
    By TEXT_WELCOME = MobileBy.id("tvWelcomeUser");
    By TEXT_PAYSTORE_BALANCE = MobileBy.id("tvPayStoreBalance");
    By TEXT_TITLE_PAYMENT = MobileBy.id("tvTitlePayment");

    // Button
//    By BUTTON_TOP_UP = MobileBy.id("btnTopUp");
//    By BUTTON_TRANSFER = MobileBy.id("btnTransfer");
//    By BUTTON_PULSA = MobileBy.id("btnPulsaOption");
//    By BUTTON_PAKET_DATA = MobileBy.id("btnPaketDataOption");
    By BUTTON_TELKOM = MobileBy.id("btnTelkomOption");
//    By BUTTON_PBB = MobileBy.id("btnPBBOption");
//    By BUTTON_EMONEY = MobileBy.id("btnEMoneyOption");
    By BUTTON_HISTORY = MobileBy.id("btnHistory");
    By BUTTON_PROFILE = MobileBy.id("ivUserWallet");

    // Image
    By IMAGE_CIRCLE_TOP = MobileBy.id("ivCircleTop");
    By IMAGE_CIRCLE_BOTTOM = MobileBy.id("ivCircleBottom");

    // Card View
    By CARD_USER_PROFILE = MobileBy.id("cvUserProfile");

}
