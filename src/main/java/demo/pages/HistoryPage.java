package demo.pages;

import demo.driver.AndroidDriverInstance;
import demo.locators.HistoryLocator;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HistoryPage implements HistoryLocator {
    WebDriverWait wait = new WebDriverWait(AndroidDriverInstance.androidDriver, 20);

    public boolean onHistoryPage(){
        return wait.until(ExpectedConditions.presenceOfElementLocated(TEXT_TITLE)).isDisplayed();
    }

    public void clickAHistory(){
        WebElement clickHistory = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//android.widget" +
                ".ScrollView//android.widget.FrameLayout[1]")));
        clickHistory.click();
    }

    public void backButton(){
        WebElement backClick= wait.until(ExpectedConditions.presenceOfElementLocated(BUTTON_BACK));
        backClick.click();
    }
}
