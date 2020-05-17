@Android
Feature: Payment
  Background:
    Given User is on app login page
    When User input "82112345678" in phone number field
    And User input "P@ssw0rd!" in password text field
    And User click login button
    Then User is on Home Page

  @Payment_1
    Scenario: User pay telephone bill
      Given User is on Home Page
      When User choose telkom payment
      And User is on input phone number page
      And User input telkom phone number "0227212345"
      And User click cek tagihan button
      And User see payment detail
      And User choose payment method
      And User choose paystore method
      And User click bayar sekarang button
      And User is on OTP page
      And User input OTP
      And User click confirm button
      Then User see payment success page
      And User click close button

  @Payment_2
    Scenario: User resend otp
      Given User is on Home Page
      When User choose telkom payment
      And User is on input phone number page
      And User input telkom phone number "02272915753"
      And User click cek tagihan button
      And User see payment detail
      And User choose payment method
      And User choose paystore method
      And User click bayar sekarang button
      And User is on OTP page
      And User input OTP
      And User click confirm button
      Then User see payment success page

  @Payment_3
    Scenario: User input unregistered telkom phone number
      Given User is on Home Page
      When User choose telkom payment
      And User is on input phone number page
      And User input telkom phone number "022123456"
      And User click cek tagihan button
      Then User see error pop up

