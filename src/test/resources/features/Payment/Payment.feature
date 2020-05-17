@Android @Payment
Feature: Payment
  Background:
    Given User is on app login page
    When User input "82112345678" in phone number field
    And User input "P@ssw0rd!" in password text field
    And User click login button
    Then User is on Home Page

  @Payment_1
    Scenario: User pay telephone bill using paystore wallet
      Given User is on Home Page
      When User choose telkom payment
      And User is on input phone number page
      And User input telkom phone number "0361123456789"
      And User click cek tagihan button
      And User see payment detail
      And User choose payment method
      And User choose paystore method
      And User click bayar sekarang button
      And User is on OTP page
      And User input OTP
      And User click confirm button
      Then User see payment success pop up
      And User close payment success pop up

  @Payment_2
  Scenario: User pay telephone bill using virtual account
    Given User is on Home Page
    When User choose telkom payment
    And User is on input phone number page
    And User input telkom phone number "03611234"
    And User click cek tagihan button
    And User see payment detail
    And User choose payment method
    And User choose virtual account method
    And User click bayar sekarang button
#    And User is on OTP page
#    And User input OTP
#    And User click confirm button
    Then User see payment success pop up
    And User close payment success pop up

  @Payment_3
    Scenario: User resend otp
      Given User is on Home Page
      When User choose telkom payment
      And User is on input phone number page
      And User input telkom phone number "036112345"
      And User click cek tagihan button
      And User see payment detail
      And User choose payment method
      And User choose paystore method
      And User click bayar sekarang button
      And User is on OTP page
      And User wait for thirty seconds
      And User input OTP
      And User click confirm button
      Then User see payment success pop up
      And User close payment success pop up

  @Payment_4
    Scenario: User input unregistered telkom phone number
      Given User is on Home Page
      When User choose telkom payment
      And User is on input phone number page
      And User input telkom phone number "022123456"
      And User click cek tagihan button
      Then User see error pop up

