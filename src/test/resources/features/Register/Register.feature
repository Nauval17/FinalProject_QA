@Android @Register
  Feature: Register

    # Valid inputs register
    @Valid
    Scenario Outline: Register new account with valid input
      Given User tapped register button on login page
      And User is on register page
      When User input "<name>" as the name on register page
      And User input "<email>" as the email on register page
      And User input "<phone_number>" as the phone number on register page
      And User input "<password>" as the password on register page
      And User input "<confirm_password>" as the repeat of password on register page
      And User tap Register button on register page
      Then User is on register verification page
      Examples:
        | name                 | email                         | phone_number | password             | confirm_password     |
        | Zak                  | zakifaridzan@gmail.com        | 81223176610  | Zaki123@             | Zaki123@             |
        | Zaki Akhmad          | zakiakhmadfaridzaa@gmail.com  | 81223176611  | Zaki123@             | Zaki123@             |
        | Zaki Akhmad Faridzan | zakiakhmadfaridznn@gmail.com  | 81223176612  | Zaki123@             | Zaki123@             |
        | zaki akhmad faridzan | zakiakhmadfaridzzz@gmail.com  | 81223176613  | Zaki123@             | Zaki123@             |
        | ZAKI AKHMAD FARIDZAN | zakiakhmadfaridzzn@gmail.com  | 81223176614  | Zaki123@             | Zaki123@             |
        | zakiAkhmadFaridzan   | zakiakhmadfaridzna@gmail.com  | 81223176615  | Zaki123@             | Zaki123@             |
        | Zaki Akhmad Faridzan | zakiakhmadf25@gmail.com       | 81223176616  | Zaki123@             | Zaki123@             |
        | Zaki Akhmad Faridzan | zaki.akhmadf@gmail.com        | 81223176618  | Zaki123@             | Zaki123@             |
        | Zaki Akhmad Faridzan | zaki_akhmadf@gmail.com        | 81223176619  | Zaki123@             | Zaki123@             |
        | Zaki Akhmad Faridzan | zaki-akhmadf@gmail.com        | 81223176620  | Zaki123@             | Zaki123@             |
        | Zaki Akhmad Faridzan | zakiakhmadfaridzan1@gmail.com | 812234565    | Zaki123@             | Zaki123@             |
        | Zaki Akhmad Faridzan | zakiakhmadfaridzan2@gmail.com | 812234565888 | Zaki123@             | Zaki123@             |
        | Zaki Akhmad Faridzan | zakiakhmadfaridzan3@gmail.com | 81223176622  | Zakiakhmad123!@      | Zakiakhmad123!@      |
        | Zaki Akhmad Faridzan | zakiakhmadfaridzan4@gmail.com | 81223176623  | Zakiakhmadf1234567!@ | Zakiakhmadf1234567!@ |

    # Invalid inputs
    @Invalid
    Scenario Outline: Register new account with invalid input
      Given User tapped register button on login page
      And User is on register page
      When User input "<name>" as the name on register page
      And User input "<email>" as the email on register page
      And User input "<phone_number>" as the phone number on register page
      And User input "<password>" as the password on register page
      And User input "<confirm_password>" as the repeat of password on register page
      And User tap Register button on register page
      Then User get "Please Enter Valid Information" as the error message on register page
      And User is still on register page
      Examples:
        | name                  | email                          | phone_number  | password              | confirm_password      |
        |                       | zakiakhmadfaridzan5@gmail.com  | 81223176624   | Zaki123@              | Zaki123@              |
        | Za                    | zakiakhmadfaridzan6@gmail.com  | 81223176625   | Zaki123@              | Zaki123@              |
        | Zaki Akhmad Faridzann | zakiakhmadfaridzan7@gmail.com  | 81223176626   | Zaki123@              | Zaki123@              |
        | Zaki123               | zakiakhmadfaridzan8@gmail.com  | 81223176627   | Zaki123@              | Zaki123@              |
        | 123456                | zakiakhmadfaridzan9@gmail.com  | 81223176628   | Zaki123@              | Zaki123@              |
        | Zaki!@                | zakiakhmadfaridzan10@gmail.com | 81223176629   | Zaki123@              | Zaki123@              |
        | Zaki🙃                | zakiakhmadfaridzan11@gmail.com | 81223176630   | Zaki123@              | Zaki123@              |
        | Zaki Akhmad Faridzan  |                                | 81223176631   | Zaki123@              | Zaki123@              |
        | Zaki Akhmad Faridzan  | zakifaridzan.@gmail.com        | 81223176632   | Zaki123@              | Zaki123@              |
        | Zaki Akhmad Faridzan  | zaki akhmad@gmail.com          | 81223176633   | Zaki123@              | Zaki123@              |
        | Zaki Akhmad Faridzan  | .zakiakhmad@gmail.com          | 81223176634   | Zaki123@              | Zaki123@              |
        | Zaki Akhmad Faridzan  | zakiakhmadgmail.com            | 81223176635   | Zaki123@              | Zaki123@              |
        | Zaki Akhmad Faridzan  | zakiakhmad@com                 | 81223176636   | Zaki123@              | Zaki123@              |
        | Zaki Akhmad Faridzan  | zakiakhmad@gmail.              | 81223176637   | Zaki123@              | Zaki123@              |
        | Zaki Akhmad Faridzan  | zakiakhmad@.gmail.com          | 81223176638   | Zaki123@              | Zaki123@              |
        | Zaki Akhmad Faridzan  | zakiakhmad@@gmail.com          | 81223176639   | Zaki123@              | Zaki123@              |
        | Zaki Akhmad Faridzan  | zakiakhmad@gmail..com          | 81223176640   | Zaki123@              | Zaki123@              |
        | Zaki Akhmad Faridzan  | zakiakhmad@gmail.c             | 81223176641   | Zaki123@              | Zaki123@              |
        | Zaki Akhmad Faridzan  | zakiakhmad                     | 81223176642   | Zaki123@              | Zaki123@              |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan12@gmail.com |               | Zaki123@              | Zaki123@              |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan13@gmail.com | 81223176      | Zaki123@              | Zaki123@              |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan14@gmail.com | 8122317661700 | Zaki123@              | Zaki123@              |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan17@gmail.com | ._,--,_._-    | Zaki123@              | Zaki123@              |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan18@gmail.com | 812231766-.   | Zaki123@              | Zaki123@              |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan19@gmail.com | -81223176642  | Zaki123@              | Zaki123@              |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan20@gmail.com | 812-2317-661  | Zaki123@              | Zaki123@              |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan21@gmail.com | 81223176643   |                       | Zaki123@              |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan22@gmail.com | 81223176644   | Zaki12@               | Zaki12@               |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan23@gmail.com | 81223176645   | Zakiakhmad123456789!@ | Zakiakhmad123456789!@ |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan24@gmail.com | 81223176646   | Zaki 123@             | Zaki 123@             |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan25@gmail.com | 81223176647   | Zaki1234              | Zaki1234              |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan26@gmail.com | 81223176648   | Zakiabcd              | Zakiabcd              |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan27@gmail.com | 81223176649   | zakitest              | zakitest              |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan28@gmail.com | 81223176650   | Zaki!@!@              | Zaki!@!@              |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan29@gmail.com | 81223176651   | zaki123@              | zaki123@              |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan30@gmail.com | 81223176652   | zaki12345             | zaki12345             |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan31@gmail.com | 81223176653   | zaki!@!@              | zaki!@!@              |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan32@gmail.com | 81223176654   | ZAKI123@              | ZAKI123@              |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan33@gmail.com | 81223176655   | ZAKI12345             | ZAKI12345             |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan34@gmail.com | 81223176656   | ZAKI@!@!              | ZAKI@!@!              |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan35@gmail.com | 81223176657   | ZAKIFARIDZAN          | ZAKIFARIDZAN          |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan36@gmail.com | 81223176658   | 1234!@#$              | 1234!@#$              |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan37@gmail.com | 81223176659   | 12345678              | 12345678              |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan38@gmail.com | 81223176660   | !@#$%^&*              | !@#$%^&*              |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan39@gmail.com | 81223176661   | Zaki123@              |                       |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan40@gmail.com | 81223176662   | Zaki123@              | Zaki123#              |
        |                       |                                |               |                       |                       |
        |                       |                                |               |                       | Zaki123#              |
        |                       |                                |               | Zaki123@              |                       |
        |                       |                                |               | Zaki123@              | Zaki123@              |
        |                       |                                | 81223176663   |                       |                       |
        |                       |                                | 81223176663   |                       | Zaki123@              |
        |                       |                                | 81223176663   | Zaki123@              |                       |
        |                       |                                | 81223176663   | Zaki123@              | Zaki123@              |
        |                       | zakiakhmadfaridzan41@gmail.com |               |                       |                       |
        |                       | zakiakhmadfaridzan41@gmail.com |               |                       | Zaki123@              |
        |                       | zakiakhmadfaridzan41@gmail.com |               | Zaki123@              |                       |
        |                       | zakiakhmadfaridzan41@gmail.com |               | Zaki123@              | Zaki123@              |
        |                       | zakiakhmadfaridzan41@gmail.com | 81223176663   |                       |                       |
        |                       | zakiakhmadfaridzan41@gmail.com | 81223176663   |                       | Zaki123@              |
        |                       | zakiakhmadfaridzan41@gmail.com | 81223176663   | Zaki123@              |                       |
        | Zaki Akhmad Faridzan  |                                |               |                       |                       |
        | Zaki Akhmad Faridzan  |                                |               |                       | Zaki123@              |
        | Zaki Akhmad Faridzan  |                                |               | Zaki123@              |                       |
        | Zaki Akhmad Faridzan  |                                |               | Zaki123@              | Zaki123@              |
        | Zaki Akhmad Faridzan  |                                | 81223176663   |                       |                       |
        | Zaki Akhmad Faridzan  |                                | 81223176663   |                       | Zaki123@              |
        | Zaki Akhmad Faridzan  |                                | 81223176663   | Zaki123@              |                       |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan41@gmail.com |               |                       |                       |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan41@gmail.com |               |                       | Zaki123@              |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan41@gmail.com |               | Zaki123@              |                       |
        | Zaki Akhmad Faridzan  | zakiakhmadfaridzan41@gmail.com | 81223176663   |                       |                       |
