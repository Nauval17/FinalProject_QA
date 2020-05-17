package demo.pages;

import demo.driver.AndroidDriverInstance;
import demo.locators.PaymentMethodPopUpLocator;
import io.appium.java_client.android.AndroidElement;

public class PaymentMethodPage implements PaymentMethodPopUpLocator {

    public void choosePayStore(){
        AndroidElement paystoreClick = AndroidDriverInstance.androidDriver.findElement(RECYCLE_ITEM_PAYSTORE_WALLET);
        paystoreClick.click();
    }

    public void chooseVirtualAccount(){
        AndroidElement virtualAccountClick = AndroidDriverInstance.androidDriver.findElement(
                RECYCLE_ITEM_VIRTUAL_ACCOUNT);
        virtualAccountClick.click();
    }

    public void backButton(){
        AndroidElement back_button = AndroidDriverInstance.androidDriver.findElement(BUTTON_BACK);
        back_button.click();
    }
}
