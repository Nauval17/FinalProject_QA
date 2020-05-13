@Android @Login
Feature: Login

#  Scenario: Login with 9 digits phone number and all inputs are valid
#    Given User is on app login page
#    When  User input "811123456" in phone number field
#    And   User input "Pass@123" in password text field
#    And   User click login button
#    Then  User is on Payment Home

# Scenario: Login with 9 digits phone number and all inputs are valid
#    Given User is on app login page
#    When  User input "811654321" in phone number field
#    And   User input "Password#123" in password text field
#    And   User click login button
#    Then  User is on Payment Home

#  Scenario: Login with 11 digits phone number and all inputs are valid
#    Given User is on app login page
#    When  User input "81812345678" in phone number field
#    And   User input "Pass.123" in password text field
#    And   User click login button
#    Then  User is on Payment Home

#  Scenario: Login with 11 digits phone number and all inputs are valid
#    Given User is on app login page
#    When  User input "81812348765" in phone number field
#    And   User input "Password$123" in password text field
#    And   User click login button
#    Then  User is on Payment Home

#  Scenario: Login with 12 digits phone number and all inputs are valid
#    Given User is on app login page
#    When  User input "895123456789" in phone number field
#    And   User input "passWord123%" in password text field
#    And   User click login button
#    Then  User is on Payment Home

#  Scenario: Login with 12 digits phone number and all inputs are valid
#    Given User is on app login page
#    When  User input "895987654321" in phone number field
#    And   User input "pasS123" in password text field
#    And   User click login button
#    Then  User is on Payment Home

  Scenario Outline: Login with valid phone number and password
    Given User is on app login page
    When  User input "<loginPhoneNumber>" in phone number field
    And   User input "<loginPassword>" in password text field
    And   User click login button
    Then  User is on Payment Home
    Examples:
      | loginPhoneNumber | loginPassword |
      | 811123456        | Pass@123      |
      | 811654321        | Password#123  |
      | 81812345678      | Pass.123      |
      | 81812348765      | Password$123  |
      | 895123456789     | passWord123%  |
      | 895987654321     | pasS123       |
