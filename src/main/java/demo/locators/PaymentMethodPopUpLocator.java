package demo.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface PaymentMethodPopUpLocator {

    // Text View
    By TEXT_TITLE = MobileBy.id("tvTitlePilihmetode");
    // Button
    By BUTTON_BACK = MobileBy.id("btnBackFromMetode");
    // Recycle View
    By RECYCLE_ITEM_PAYSTORE_WALLET = MobileBy.xpath("//androidx.recyclerview.widget.RecyclerView/child::android.view" +
            ".ViewGroup[1]");
    By RECYCLE_ITEM_VIRTUAL_ACCOUNT = MobileBy.xpath("//androidx.recyclerview.widget.RecyclerView/child::android.view" +
            ".ViewGroup[2]");

    // Element inside Recycle View
    By TEXT_TITLE_METHOD = MobileBy.id("tvTitleMethod");
    By TEXT_VALUE_METHOD = MobileBy.id("tvValueMethod");
    By IMAGE_METHOD = MobileBy.id("ivMethod");
    By IMAGE_SELECT = MobileBy.id("ivSelect");
}
