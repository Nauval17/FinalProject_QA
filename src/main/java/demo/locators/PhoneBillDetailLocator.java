package demo.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface PhoneBillDetailLocator {

    // Text View
    By TEXT_TITLE_PAGE = MobileBy.id("tvTitleRincian");
    By TEXT_PAYMENT_METHOD = MobileBy.id("tvTitleMetodePembayaran");
    By TEXT_TRANSACTION_DETAIL = MobileBy.id("tvTitleDetailTransaksi");
    By TEXT_TITLE_NAME = MobileBy.id("tvTitleNamaPelanggan");
    By TEXT_USERNAME = MobileBy.id("tvNamaPel");
    By TEXT_TITLE_PAYMENT_DETAIL = MobileBy.id("tvTitleDetailPembayaran");
    By TEXT_TITLE_NOMINAL = MobileBy.id("tvTitleNominalPembayaran");
    By TEXT_BILL_NOMINAL = MobileBy.id("tvNominal");
    By TEXT_TITLE_ADMIN = MobileBy.id("tvTitleAdminPembayaran");
    By TEXT_ADMIN_NOMINAL = MobileBy.id("tvAdmin");
    By TEXT_TITLE_TOTAL = MobileBy.id("tvTitleTotalTagihan");
    By TEXT_TOTAL_NOMINAL = MobileBy.id("tvTotal");
    By TEXT_CHOSEN_METHOD = MobileBy.id("tvSelectedTitleMethod");
    By TEXT_VALUE_METHOD = MobileBy.id("tvSelectedValueMethod");

    // Button
    By BUTTON_CHOOSE_METHOD = MobileBy.id("btnMetodeOption");
    By BUTTON_PAY = MobileBy.id("btnBayarTagihan");
    By BUTTON_BACK = MobileBy.id("ibBackFromDetail");

    // Image View
    By IMAGE_CHOSEN_METHOD = MobileBy.id("ivSelectedMethod");
}
