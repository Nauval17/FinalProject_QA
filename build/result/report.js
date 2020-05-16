$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Android"
    },
    {
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Login with invalid phone number and/or password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Invalid"
    }
  ]
});
formatter.step({
  "name": "User is on app login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User input \"\u003cloginPhoneNumber\u003e\" in phone number field",
  "keyword": "When "
});
formatter.step({
  "name": "User input \"\u003cloginPassword\u003e\" in password text field",
  "keyword": "And "
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "name": "User is not on Home Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "loginPhoneNumber",
        "loginPassword"
      ]
    },
    {
      "cells": [
        "",
        "Pass@123"
      ]
    },
    {
      "cells": [
        "81112345",
        "Pass@123"
      ]
    },
    {
      "cells": [
        "8959182736450",
        "Pass@123"
      ]
    },
    {
      "cells": [
        "qwertyuiop",
        "Pass@123"
      ]
    },
    {
      "cells": [
        "qwerty12345",
        "Pass@123"
      ]
    },
    {
      "cells": [
        ".-,_,._,-",
        "Pass@123"
      ]
    },
    {
      "cells": [
        "-8,11451.987_",
        "Pass@123"
      ]
    },
    {
      "cells": [
        "81212345678",
        "Pass@123"
      ]
    },
    {
      "cells": [
        "811123456",
        ""
      ]
    },
    {
      "cells": [
        "811123456",
        "Pass@12"
      ]
    },
    {
      "cells": [
        "811123456",
        "LoginPassword@1234567"
      ]
    },
    {
      "cells": [
        "811123456",
        "Pass @123"
      ]
    },
    {
      "cells": [
        "811123456",
        "Pass1234"
      ]
    },
    {
      "cells": [
        "811123456",
        "Pass!@#$"
      ]
    },
    {
      "cells": [
        "811123456",
        "pass@123"
      ]
    },
    {
      "cells": [
        "811123456",
        "PASS@123"
      ]
    },
    {
      "cells": [
        "811123456",
        "PASSword"
      ]
    },
    {
      "cells": [
        "811123456",
        "pass1234"
      ]
    },
    {
      "cells": [
        "811123456",
        "PASS1234"
      ]
    },
    {
      "cells": [
        "811123456",
        "pass!@#$"
      ]
    },
    {
      "cells": [
        "811123456",
        "PASS!@#$"
      ]
    },
    {
      "cells": [
        "811123456",
        "!@#$1234"
      ]
    },
    {
      "cells": [
        "811123456",
        "!@#$%^\u0026*"
      ]
    },
    {
      "cells": [
        "811123456",
        "12345678"
      ]
    },
    {
      "cells": [
        "811123456",
        "PASSWORD"
      ]
    },
    {
      "cells": [
        "811123456",
        "password"
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    },
    {
      "cells": [
        "",
        "Pass@12"
      ]
    },
    {
      "cells": [
        "",
        "LoginPassword@1234567"
      ]
    },
    {
      "cells": [
        "",
        "Pass @123"
      ]
    },
    {
      "cells": [
        "",
        "Pass1234"
      ]
    },
    {
      "cells": [
        "",
        "Pass!@#$"
      ]
    },
    {
      "cells": [
        "",
        "pass@123"
      ]
    },
    {
      "cells": [
        "",
        "PASS@123"
      ]
    },
    {
      "cells": [
        "",
        "PASSword"
      ]
    },
    {
      "cells": [
        "",
        "pass1234"
      ]
    },
    {
      "cells": [
        "",
        "PASS1234"
      ]
    },
    {
      "cells": [
        "",
        "pass!@#$"
      ]
    },
    {
      "cells": [
        "",
        "PASS!@#$"
      ]
    },
    {
      "cells": [
        "",
        "!@#$1234"
      ]
    },
    {
      "cells": [
        "",
        "!@#$%^\u0026*"
      ]
    },
    {
      "cells": [
        "",
        "12345678"
      ]
    },
    {
      "cells": [
        "",
        "PASSWORD"
      ]
    },
    {
      "cells": [
        "",
        "password"
      ]
    },
    {
      "cells": [
        "81112345",
        ""
      ]
    },
    {
      "cells": [
        "81112345",
        "Pass@12"
      ]
    },
    {
      "cells": [
        "81112345",
        "LoginPassword@1234567"
      ]
    },
    {
      "cells": [
        "81112345",
        "Pass @123"
      ]
    },
    {
      "cells": [
        "81112345",
        "Pass1234"
      ]
    },
    {
      "cells": [
        "81112345",
        "pass@123"
      ]
    },
    {
      "cells": [
        "81112345",
        "PASS@123"
      ]
    },
    {
      "cells": [
        "81112345",
        "PASSword"
      ]
    },
    {
      "cells": [
        "81112345",
        "pass1234"
      ]
    },
    {
      "cells": [
        "81112345",
        "PASS1234"
      ]
    },
    {
      "cells": [
        "81112345",
        "pass!@#$"
      ]
    },
    {
      "cells": [
        "81112345",
        "PASS!@#$"
      ]
    },
    {
      "cells": [
        "81112345",
        "!@#$1234"
      ]
    },
    {
      "cells": [
        "81112345",
        "!@#$%^\u0026*"
      ]
    },
    {
      "cells": [
        "81112345",
        "12345678"
      ]
    },
    {
      "cells": [
        "81112345",
        "PASSWORD"
      ]
    },
    {
      "cells": [
        "81112345",
        "password"
      ]
    },
    {
      "cells": [
        "8959182736450",
        ""
      ]
    },
    {
      "cells": [
        "8959182736450",
        "Pass@12"
      ]
    },
    {
      "cells": [
        "8959182736450",
        "LoginPassword@1234567"
      ]
    },
    {
      "cells": [
        "8959182736450",
        "Pass @123"
      ]
    },
    {
      "cells": [
        "8959182736450",
        "Pass1234"
      ]
    },
    {
      "cells": [
        "8959182736450",
        "Pass!@#$"
      ]
    },
    {
      "cells": [
        "8959182736450",
        "pass@123"
      ]
    },
    {
      "cells": [
        "8959182736450",
        "PASS@123"
      ]
    },
    {
      "cells": [
        "8959182736450",
        "PASSword"
      ]
    },
    {
      "cells": [
        "8959182736450",
        "pass1234"
      ]
    },
    {
      "cells": [
        "8959182736450",
        "PASS1234"
      ]
    },
    {
      "cells": [
        "8959182736450",
        "pass!@#$"
      ]
    },
    {
      "cells": [
        "8959182736450",
        "PASS!@#$"
      ]
    },
    {
      "cells": [
        "8959182736450",
        "!@#$1234"
      ]
    },
    {
      "cells": [
        "8959182736450",
        "!@#$%^\u0026*"
      ]
    },
    {
      "cells": [
        "8959182736450",
        "12345678"
      ]
    },
    {
      "cells": [
        "8959182736450",
        "PASSWORD"
      ]
    },
    {
      "cells": [
        "8959182736450",
        "password"
      ]
    },
    {
      "cells": [
        "qwertyuiop",
        ""
      ]
    },
    {
      "cells": [
        "qwertyuiop",
        "Pass@12"
      ]
    },
    {
      "cells": [
        "qwertyuiop",
        "LoginPassword@1234567"
      ]
    },
    {
      "cells": [
        "qwertyuiop",
        "Pass @123"
      ]
    },
    {
      "cells": [
        "qwertyuiop",
        "Pass1234"
      ]
    },
    {
      "cells": [
        "qwertyuiop",
        "Pass!@#$"
      ]
    },
    {
      "cells": [
        "qwertyuiop",
        "pass@123"
      ]
    },
    {
      "cells": [
        "qwertyuiop",
        "PASS@123"
      ]
    },
    {
      "cells": [
        "qwertyuiop",
        "PASSword"
      ]
    },
    {
      "cells": [
        "qwertyuiop",
        "pass1234"
      ]
    },
    {
      "cells": [
        "qwertyuiop",
        "PASS1234"
      ]
    },
    {
      "cells": [
        "qwertyuiop",
        "pass!@#$"
      ]
    },
    {
      "cells": [
        "qwertyuiop",
        "PASS!@#$"
      ]
    },
    {
      "cells": [
        "qwertyuiop",
        "!@#$1234"
      ]
    },
    {
      "cells": [
        "qwertyuiop",
        "!@#$%^\u0026*"
      ]
    },
    {
      "cells": [
        "qwertyuiop",
        "12345678"
      ]
    },
    {
      "cells": [
        "qwertyuiop",
        "PASSWORD"
      ]
    },
    {
      "cells": [
        "qwertyuiop",
        "password"
      ]
    },
    {
      "cells": [
        "qwerty12345",
        ""
      ]
    },
    {
      "cells": [
        "qwerty12345",
        "Pass@12"
      ]
    },
    {
      "cells": [
        "qwerty12345",
        "LoginPassword@1234567"
      ]
    },
    {
      "cells": [
        "qwerty12345",
        "Pass @123"
      ]
    },
    {
      "cells": [
        "qwerty12345",
        "Pass1234"
      ]
    },
    {
      "cells": [
        "qwerty12345",
        "Pass!@#$"
      ]
    },
    {
      "cells": [
        "qwerty12345",
        "pass@123"
      ]
    },
    {
      "cells": [
        "qwerty12345",
        "PASS@123"
      ]
    },
    {
      "cells": [
        "qwerty12345",
        "PASSword"
      ]
    },
    {
      "cells": [
        "qwerty12345",
        "pass1234"
      ]
    },
    {
      "cells": [
        "qwerty12345",
        "PASS1234"
      ]
    },
    {
      "cells": [
        "qwerty12345",
        "pass!@#$"
      ]
    },
    {
      "cells": [
        "qwerty12345",
        "PASS!@#$"
      ]
    },
    {
      "cells": [
        "qwerty12345",
        "!@#$1234"
      ]
    },
    {
      "cells": [
        "qwerty12345",
        "!@#$%^\u0026*"
      ]
    },
    {
      "cells": [
        "qwerty12345",
        "12345678"
      ]
    },
    {
      "cells": [
        "qwerty12345",
        "PASSWORD"
      ]
    },
    {
      "cells": [
        "qwerty12345",
        "password"
      ]
    },
    {
      "cells": [
        ".-,_,._,-",
        ""
      ]
    },
    {
      "cells": [
        ".-,_,._,-",
        "Pass@12"
      ]
    },
    {
      "cells": [
        ".-,_,._,-",
        "LoginPassword@1234567"
      ]
    },
    {
      "cells": [
        ".-,_,._,-",
        "Pass @123"
      ]
    },
    {
      "cells": [
        ".-,_,._,-",
        "Pass1234"
      ]
    },
    {
      "cells": [
        ".-,_,._,-",
        "Pass!@#$"
      ]
    },
    {
      "cells": [
        ".-,_,._,-",
        "pass@123"
      ]
    },
    {
      "cells": [
        ".-,_,._,-",
        "PASS@123"
      ]
    },
    {
      "cells": [
        ".-,_,._,-",
        "PASSword"
      ]
    },
    {
      "cells": [
        ".-,_,._,-",
        "pass1234"
      ]
    },
    {
      "cells": [
        ".-,_,._,-",
        "PASS1234"
      ]
    },
    {
      "cells": [
        ".-,_,._,-",
        "pass!@#$"
      ]
    },
    {
      "cells": [
        ".-,_,._,-",
        "PASS!@#$"
      ]
    },
    {
      "cells": [
        ".-,_,._,-",
        "!@#$1234"
      ]
    },
    {
      "cells": [
        ".-,_,._,-",
        "!@#$%^\u0026*"
      ]
    },
    {
      "cells": [
        ".-,_,._,-",
        "12345678"
      ]
    },
    {
      "cells": [
        ".-,_,._,-",
        "PASSWORD"
      ]
    },
    {
      "cells": [
        ".-,_,._,-",
        "password"
      ]
    },
    {
      "cells": [
        "-8,11451.987_",
        ""
      ]
    },
    {
      "cells": [
        "-8,11451.987_",
        "Pass@12"
      ]
    },
    {
      "cells": [
        "-8,11451.987_",
        "LoginPassword@1234567"
      ]
    },
    {
      "cells": [
        "-8,11451.987_",
        "Pass @123"
      ]
    },
    {
      "cells": [
        "-8,11451.987_",
        "Pass1234"
      ]
    },
    {
      "cells": [
        "-8,11451.987_",
        "Pass!@#$"
      ]
    },
    {
      "cells": [
        "-8,11451.987_",
        "pass@123"
      ]
    },
    {
      "cells": [
        "-8,11451.987_",
        "PASS@123"
      ]
    },
    {
      "cells": [
        "-8,11451.987_",
        "PASSword"
      ]
    },
    {
      "cells": [
        "-8,11451.987_",
        "pass1234"
      ]
    },
    {
      "cells": [
        "-8,11451.987_",
        "PASS1234"
      ]
    },
    {
      "cells": [
        "-8,11451.987_",
        "pass!@#$"
      ]
    },
    {
      "cells": [
        "-8,11451.987_",
        "PASS!@#$"
      ]
    },
    {
      "cells": [
        "-8,11451.987_",
        "!@#$1234"
      ]
    },
    {
      "cells": [
        "-8,11451.987_",
        "!@#$%^\u0026*"
      ]
    },
    {
      "cells": [
        "-8,11451.987_",
        "12345678"
      ]
    },
    {
      "cells": [
        "-8,11451.987_",
        "PASSWORD"
      ]
    },
    {
      "cells": [
        "-8,11451.987_",
        "password"
      ]
    },
    {
      "cells": [
        "81212345678",
        ""
      ]
    },
    {
      "cells": [
        "81212345678",
        "Pass@12"
      ]
    },
    {
      "cells": [
        "81212345678",
        "LoginPassword@1234567"
      ]
    },
    {
      "cells": [
        "81212345678",
        "Pass @123"
      ]
    },
    {
      "cells": [
        "81212345678",
        "Pass1234"
      ]
    },
    {
      "cells": [
        "81212345678",
        "Pass!@#$"
      ]
    },
    {
      "cells": [
        "81212345678",
        "pass@123"
      ]
    },
    {
      "cells": [
        "81212345678",
        "PASS@123"
      ]
    },
    {
      "cells": [
        "81212345678",
        "PASSword"
      ]
    },
    {
      "cells": [
        "81212345678",
        "pass1234"
      ]
    },
    {
      "cells": [
        "81212345678",
        "PASS1234"
      ]
    },
    {
      "cells": [
        "81212345678",
        "pass!@#$"
      ]
    },
    {
      "cells": [
        "81212345678",
        "PASS!@#$"
      ]
    },
    {
      "cells": [
        "81212345678",
        "!@#$1234"
      ]
    },
    {
      "cells": [
        "81212345678",
        "!@#$%^\u0026*"
      ]
    },
    {
      "cells": [
        "81212345678",
        "12345678"
      ]
    },
    {
      "cells": [
        "81212345678",
        "PASSWORD"
      ]
    },
    {
      "cells": [
        "81212345678",
        "password"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with invalid phone number and/or password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Android"
    },
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on app login page",
  "keyword": "Given "
});
formatter.match({
  "location": "demo.steps.LoginDef.userIsOnAppLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass@123\" in password text field",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPasswordTextField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userClickSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is not on Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.LoginDef.userIsNotOnHomePage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.id: tvWelcomeUser (tried for 10 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat demo.pages.HomePage.onHomePage(HomePage.java:19)\n\tat demo.steps.LoginDef.userIsNotOnHomePage(LoginDef.java:42)\n\tat ✽.User is not on Home Page(file:///Users/chenr/IdeaProjects/FinalProject_QA/src/test/resources/features/Login/Login.feature:28)\nCaused by: org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027dnid0666l01.local\u0027, ip: \u0027fe80:0:0:0:104e:4346:c63d:a4b7%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/chenr/IdeaProjects/F..., appPackage: com.rifqimukhtar.phonepayment, autoGrantPermissions: true, automationName: UiAutomator2, databaseEnabled: false, desired: {app: /Users/chenr/IdeaProjects/F..., autoGrantPermissions: true, automationName: UiAutomator2, deviceName: device, newCommandTimeout: 120, platformName: android, platformVersion: 6.0, udid: emulator-5554}, deviceApiLevel: 23, deviceManufacturer: unknown, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 240, deviceScreenSize: 480x800, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 120, pixelRatio: 1.5, platform: LINUX, platformName: Android, platformVersion: 6.0, statBarHeight: 36, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 764, left: 0, top: 36, width: 480}, warnings: {}, webStorageEnabled: false}\nSession ID: f06831fb-8f2f-43b0-a7aa-6cd4c85a100e\n*** Element info: {Using\u003did, value\u003dtvWelcomeUser}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat demo.pages.HomePage.onHomePage(HomePage.java:19)\n\tat demo.steps.LoginDef.userIsNotOnHomePage(LoginDef.java:42)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$WithStepDescriptions.run(PickleRunners.java:100)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.runTestClass(JUnitTestClassExecutor.java:110)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:58)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:38)\n\tat org.gradle.api.internal.tasks.testing.junit.AbstractJUnitTestClassProcessor.processTestClass(AbstractJUnitTestClassProcessor.java:62)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.processTestClass(SuiteTestClassProcessor.java:51)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:36)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:33)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:94)\n\tat com.sun.proxy.$Proxy2.processTestClass(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.processTestClass(TestWorker.java:118)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:36)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:182)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:164)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:412)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:64)\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:48)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:56)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.write("Scenario Fail");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid phone number and/or password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Android"
    },
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    }
  ]
});
