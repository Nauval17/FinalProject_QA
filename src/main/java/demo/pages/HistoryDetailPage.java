package demo.pages;

import demo.driver.AndroidDriverInstance;
import demo.locators.HistoryDetailLocator;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HistoryDetailPage implements HistoryDetailLocator {
    WebDriverWait wait = new WebDriverWait(AndroidDriverInstance.androidDriver, 20);

    public boolean onHistoryDetailPage(){
        return wait.until(ExpectedConditions.presenceOfElementLocated(TEXT_TITLE)).isDisplayed();
    }

    public void uploadButton(){
        WebElement uploadClick= wait.until(ExpectedConditions.presenceOfElementLocated(BUTTON_UPLOAD));
        uploadClick.click();
    }

    public void takePhoto(){
        WebElement photoClick= wait.until(ExpectedConditions.presenceOfElementLocated(BUTTON_TAKE_PHOTO));
        photoClick.click();
    }

    public void payButton(){
        WebElement payClick= wait.until(ExpectedConditions.presenceOfElementLocated(BUTTON_PAYMENT));
        payClick.click();
    }

    public void backButton(){
        WebElement backClick= wait.until(ExpectedConditions.presenceOfElementLocated(BUTTON_BACK));
        backClick.click();
    }
}
