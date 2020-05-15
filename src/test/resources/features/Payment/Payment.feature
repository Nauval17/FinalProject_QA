@Android @Payment
Feature: Payment
  Background:
    Given User is on app login page
    When User input "81112345" in phone number field
    And User input "Pass@123" in password text field
    And User click login button
    Then User is on Home Page

    Scenario: User pay telephone bill
      Given User is on Home Page
      When User choose telkom payment
      And User is on input phone number page
      And User input telkom phone number
      And User click cek tagihan button
      And User see payment detail
      And User choose payment method
      And User choose paystore methode
      And User click bayar sekarang button
      And User is on OTP page
      And User input OTP
      And User click confirm button
      Then User see payment success pop up
      And User click close button