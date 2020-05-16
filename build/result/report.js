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
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81112345\" in phone number field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"8959182736450\" in phone number field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwertyuiop\" in phone number field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwerty12345\" in phone number field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \".-,_,._,-\" in phone number field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"-8,11451.987_\" in phone number field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81212345678\" in phone number field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:87)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertTrue(Assert.java:53)\n\tat demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(LoginDef.java:49)\n\tat ✽.User see \"Wrong Phone/Pass Format\" as the error message on login page(file:///Users/chenr/IdeaProjects/FinalProject_QA/src/test/resources/features/Login/Login.feature:29)\n",
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
  "name": "User input \"811123456\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"811123456\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass@12\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"811123456\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"LoginPassword@1234567\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"811123456\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass @123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"811123456\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"811123456\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass!@#$\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"811123456\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"pass@123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"811123456\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASS@123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"811123456\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASSword\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"811123456\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"pass1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"811123456\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASS1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"811123456\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"pass!@#$\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"811123456\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASS!@#$\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"811123456\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"!@#$1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"811123456\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"!@#$%^\u0026*\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"811123456\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"12345678\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"811123456\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASSWORD\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"811123456\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"password\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"Pass@12\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"LoginPassword@1234567\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"Pass @123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"Pass1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"Pass!@#$\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"pass@123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"PASS@123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"PASSword\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"pass1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"PASS1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"pass!@#$\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"PASS!@#$\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"!@#$1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"!@#$%^\u0026*\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"12345678\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"PASSWORD\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"password\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81112345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81112345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass@12\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81112345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"LoginPassword@1234567\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81112345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass @123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81112345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81112345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"pass@123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81112345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASS@123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81112345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASSword\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81112345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"pass1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81112345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASS1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81112345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"pass!@#$\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81112345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASS!@#$\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81112345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"!@#$1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81112345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"!@#$%^\u0026*\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81112345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"12345678\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81112345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASSWORD\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81112345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"password\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"8959182736450\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"8959182736450\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass@12\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"8959182736450\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"LoginPassword@1234567\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"8959182736450\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass @123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"8959182736450\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"8959182736450\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass!@#$\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"8959182736450\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"pass@123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"8959182736450\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASS@123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"8959182736450\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASSword\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"8959182736450\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"pass1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"8959182736450\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASS1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"8959182736450\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"pass!@#$\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"8959182736450\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASS!@#$\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"8959182736450\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"!@#$1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"8959182736450\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"!@#$%^\u0026*\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"8959182736450\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"12345678\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"8959182736450\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASSWORD\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"8959182736450\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"password\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwertyuiop\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwertyuiop\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass@12\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwertyuiop\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"LoginPassword@1234567\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwertyuiop\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass @123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwertyuiop\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwertyuiop\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass!@#$\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwertyuiop\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"pass@123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwertyuiop\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASS@123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwertyuiop\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASSword\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwertyuiop\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"pass1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwertyuiop\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASS1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwertyuiop\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"pass!@#$\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwertyuiop\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASS!@#$\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwertyuiop\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"!@#$1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwertyuiop\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"!@#$%^\u0026*\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwertyuiop\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"12345678\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwertyuiop\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASSWORD\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwertyuiop\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"password\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwerty12345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwerty12345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass@12\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwerty12345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"LoginPassword@1234567\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwerty12345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass @123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwerty12345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwerty12345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass!@#$\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwerty12345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"pass@123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwerty12345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASS@123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwerty12345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASSword\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwerty12345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"pass1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwerty12345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASS1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwerty12345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"pass!@#$\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwerty12345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASS!@#$\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwerty12345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"!@#$1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwerty12345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"!@#$%^\u0026*\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwerty12345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"12345678\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwerty12345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASSWORD\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"qwerty12345\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"password\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \".-,_,._,-\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \".-,_,._,-\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass@12\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \".-,_,._,-\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"LoginPassword@1234567\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \".-,_,._,-\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass @123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \".-,_,._,-\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \".-,_,._,-\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass!@#$\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \".-,_,._,-\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"pass@123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \".-,_,._,-\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASS@123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \".-,_,._,-\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASSword\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \".-,_,._,-\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"pass1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \".-,_,._,-\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASS1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \".-,_,._,-\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"pass!@#$\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \".-,_,._,-\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASS!@#$\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \".-,_,._,-\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"!@#$1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \".-,_,._,-\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"!@#$%^\u0026*\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \".-,_,._,-\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"12345678\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \".-,_,._,-\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASSWORD\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \".-,_,._,-\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"password\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"-8,11451.987_\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"-8,11451.987_\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass@12\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"-8,11451.987_\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"LoginPassword@1234567\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"-8,11451.987_\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass @123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"-8,11451.987_\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"-8,11451.987_\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass!@#$\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"-8,11451.987_\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"pass@123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"-8,11451.987_\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASS@123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"-8,11451.987_\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASSword\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"-8,11451.987_\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"pass1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"-8,11451.987_\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASS1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"-8,11451.987_\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"pass!@#$\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"-8,11451.987_\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASS!@#$\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"-8,11451.987_\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"!@#$1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"-8,11451.987_\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"!@#$%^\u0026*\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"-8,11451.987_\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"12345678\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"-8,11451.987_\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASSWORD\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"-8,11451.987_\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"password\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81212345678\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81212345678\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass@12\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81212345678\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"LoginPassword@1234567\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81212345678\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass @123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81212345678\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81212345678\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pass!@#$\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81212345678\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"pass@123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81212345678\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASS@123\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81212345678\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASSword\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81212345678\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"pass1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81212345678\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASS1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81212345678\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"pass!@#$\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81212345678\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASS!@#$\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81212345678\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"!@#$1234\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81212345678\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"!@#$%^\u0026*\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81212345678\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"12345678\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81212345678\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"PASSWORD\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "User input \"81212345678\" in phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.LoginDef.userInputInPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"password\" in password text field",
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
  "status": "passed"
});
formatter.step({
  "name": "User see \"Wrong Phone/Pass Format\" as the error message on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.LoginDef.userSeeAsTheErrorMessageOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});