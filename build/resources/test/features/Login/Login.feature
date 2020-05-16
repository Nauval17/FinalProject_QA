@Android @Login
Feature: Login
  @Valid
  Scenario Outline: Login with valid phone number and password
    Given User is on app login page
    When  User input "<loginPhoneNumber>" in phone number field
    And   User input "<loginPassword>" in password text field
    And   User click login button
    Then  User is on Home Page
    Examples:
      | loginPhoneNumber | loginPassword        |
      | 811123456        | Pass@123             |
      | 811654321        | Password123456!      |
      | 811243546        | LoginPassword#123456 |
      | 81812345678      | Pass.123             |
      | 81912348765      | Password$123456      |
      | 87813245768      | Log1nP4ssword!234567 |
      | 895123456789     | Pass123%             |
      | 896987654321     | p4ssWord.132435      |
      | 898918273645     | logiNpassworD123456, |

  @Invalid
  Scenario Outline: Login with invalid phone number and/or password
    Given User is on app login page
    When  User input "<loginPhoneNumber>" in phone number field
    And   User input "<loginPassword>" in password text field
    And   User click login button
    Then  User is not on Home Page
    Examples:
  |loginPhoneNumber  |loginPassword                |
  |                  |Pass@123                     |
  |81112345          |Pass@123                     |
  |8959182736450     |Pass@123                     |
  |qwertyuiop	     |Pass@123                     |
  |qwerty12345	     |Pass@123                     |
  |.-,_,._,-	     |Pass@123                     |
  |-8,11451.987_     |Pass@123                     |
  |81212345678	     |Pass@123                     |
  |811123456         |                             |
  |811123456         |Pass@12                      |
  |811123456         |LoginPassword@1234567        |
  |811123456         |Pass @123                    |
  |811123456         |Pass1234                     |
  |811123456         |Pass!@#$                     |
  |811123456         |pass@123                     |
  |811123456         |PASS@123                     |
  |811123456         |PASSword                     |
  |811123456         |pass1234                     |
  |811123456         |PASS1234                     |
  |811123456         |pass!@#$                     |
  |811123456         |PASS!@#$                     |
  |811123456         |!@#$1234                     |
  |811123456         |!@#$%^&*                     |
  |811123456         |12345678                     |
  |811123456         |PASSWORD                     |
  |811123456         |password                     |
  |                  |                             |
  |                  |Pass@12                      |
  |                  |LoginPassword@1234567        |
  |                  |Pass @123                    |
  |                  |Pass1234                     |
  |                  |Pass!@#$                     |
  |                  |pass@123                     |
  |                  |PASS@123                     |
  |                  |PASSword                     |
  |                  |pass1234                     |
  |                  |PASS1234                     |
  |                  |pass!@#$                     |
  |                  |PASS!@#$                     |
  |                  |!@#$1234                     |
  |                  |!@#$%^&*                     |
  |                  |12345678                     |
  |                  |PASSWORD                     |
  |                  |password                     |
  |81112345          |                             |
  |81112345          |Pass@12                      |
  |81112345          |LoginPassword@1234567        |
  |81112345          |Pass @123                    |
  |81112345          |Pass1234                     |
  |81112345          |pass@123                     |
  |81112345          |PASS@123                     |
  |81112345          |PASSword                     |
  |81112345          |pass1234                     |
  |81112345          |PASS1234                     |
  |81112345          |pass!@#$                     |
  |81112345          |PASS!@#$                     |
  |81112345          |!@#$1234                     |
  |81112345          |!@#$%^&*                     |
  |81112345          |12345678                     |
  |81112345          |PASSWORD                     |
  |81112345          |password                     |
  |8959182736450     |                             |
  |8959182736450     |Pass@12                      |
  |8959182736450     |LoginPassword@1234567        |
  |8959182736450     |Pass @123                    |
  |8959182736450     |Pass1234                     |
  |8959182736450     |Pass!@#$                     |
  |8959182736450     |pass@123                     |
  |8959182736450     |PASS@123                     |
  |8959182736450     |PASSword                     |
  |8959182736450     |pass1234                     |
  |8959182736450     |PASS1234                     |
  |8959182736450     |pass!@#$                     |
  |8959182736450     |PASS!@#$                     |
  |8959182736450     |!@#$1234                     |
  |8959182736450     |!@#$%^&*                     |
  |8959182736450     |12345678                     |
  |8959182736450     |PASSWORD                     |
  |8959182736450     |password                     |
  |qwertyuiop        |                             |
  |qwertyuiop        |Pass@12                      |
  |qwertyuiop        |LoginPassword@1234567        |
  |qwertyuiop        |Pass @123                    |
  |qwertyuiop        |Pass1234                     |
  |qwertyuiop        |Pass!@#$                     |
  |qwertyuiop        |pass@123                     |
  |qwertyuiop        |PASS@123                     |
  |qwertyuiop        |PASSword                     |
  |qwertyuiop        |pass1234                     |
  |qwertyuiop        |PASS1234                     |
  |qwertyuiop        |pass!@#$                     |
  |qwertyuiop        |PASS!@#$                     |
  |qwertyuiop        |!@#$1234                     |
  |qwertyuiop        |!@#$%^&*                     |
  |qwertyuiop        |12345678                     |
  |qwertyuiop        |PASSWORD                     |
  |qwertyuiop        |password                     |
  |qwerty12345       |                             |
  |qwerty12345       |Pass@12                      |
  |qwerty12345       |LoginPassword@1234567        |
  |qwerty12345       |Pass @123                    |
  |qwerty12345       |Pass1234                     |
  |qwerty12345       |Pass!@#$                     |
  |qwerty12345       |pass@123                     |
  |qwerty12345       |PASS@123                     |
  |qwerty12345       |PASSword                     |
  |qwerty12345       |pass1234                     |
  |qwerty12345       |PASS1234                     |
  |qwerty12345       |pass!@#$                     |
  |qwerty12345       |PASS!@#$                     |
  |qwerty12345       |!@#$1234                     |
  |qwerty12345       |!@#$%^&*                     |
  |qwerty12345       |12345678                     |
  |qwerty12345       |PASSWORD                     |
  |qwerty12345       |password                     |
  |.-,_,._,-         |                             |
  |.-,_,._,-         |Pass@12                      |
  |.-,_,._,-         |LoginPassword@1234567        |
  |.-,_,._,-         |Pass @123                    |
  |.-,_,._,-         |Pass1234                     |
  |.-,_,._,-         |Pass!@#$                     |
  |.-,_,._,-         |pass@123                     |
  |.-,_,._,-         |PASS@123                     |
  |.-,_,._,-         |PASSword                     |
  |.-,_,._,-         |pass1234                     |
  |.-,_,._,-         |PASS1234                     |
  |.-,_,._,-         |pass!@#$                     |
  |.-,_,._,-         |PASS!@#$                     |
  |.-,_,._,-         |!@#$1234                     |
  |.-,_,._,-         |!@#$%^&*                     |
  |.-,_,._,-         |12345678                     |
  |.-,_,._,-         |PASSWORD                     |
  |.-,_,._,-         |password                     |
  |-8,11451.987_     |                             |
  |-8,11451.987_     |Pass@12                      |
  |-8,11451.987_     |LoginPassword@1234567        |
  |-8,11451.987_     |Pass @123                    |
  |-8,11451.987_     |Pass1234                     |
  |-8,11451.987_     |Pass!@#$                     |
  |-8,11451.987_     |pass@123                     |
  |-8,11451.987_     |PASS@123                     |
  |-8,11451.987_     |PASSword                     |
  |-8,11451.987_     |pass1234                     |
  |-8,11451.987_     |PASS1234                     |
  |-8,11451.987_     |pass!@#$                     |
  |-8,11451.987_     |PASS!@#$                     |
  |-8,11451.987_     |!@#$1234                     |
  |-8,11451.987_     |!@#$%^&*                     |
  |-8,11451.987_     |12345678                     |
  |-8,11451.987_     |PASSWORD                     |
  |-8,11451.987_     |password                     |
  |81212345678       |                             |
  |81212345678       |Pass@12                      |
  |81212345678       |LoginPassword@1234567        |
  |81212345678       |Pass @123                    |
  |81212345678       |Pass1234                     |
  |81212345678       |Pass!@#$                     |
  |81212345678       |pass@123                     |
  |81212345678       |PASS@123                     |
  |81212345678       |PASSword                     |
  |81212345678       |pass1234                     |
  |81212345678       |PASS1234                     |
  |81212345678       |pass!@#$                     |
  |81212345678       |PASS!@#$                     |
  |81212345678       |!@#$1234                     |
  |81212345678       |!@#$%^&*                     |
  |81212345678       |12345678                     |
  |81212345678       |PASSWORD                     |
  |81212345678       |password                     |