Feature: Withdraw Cash
  This feature allows an account holder to withdraw
  cash from an ATM. 

  Background:
    These are the assumptions that we are making 
    for the following scenarios:

    * I have $200 in my account
    * There is $500 in the ATM

  @manual @withdraw
  Scenario: Withdraw without typing the write PIN
    This scenario checks whether the Withdraw Cash feature
    has any security checks in place before dispensing
    the cash to the user.

    Given I did not input my correct PIN
     When I try to withdraw $200 from my account
     Then the ATM should display "You did not input the correct PIN"
      And the ATM should not dispense any amount

  @withdraw @pin
  Scenario: Withdraw without typing the write PIN
    This scenario checks whether the Withdraw Cash feature
    has any security checks in place before dispensing
    the cash to the user.

    Given I did not input my correct PIN
     When I try to withdraw $200 from my account
     Then the ATM should display "You did not input the correct PIN"
      And the ATM should not dispense any amount

  @test-tag @pin
  Scenario Outline: Withdraw cash
    This scenario checks whether the ATM will dispense
    the correct amount and complain if an incorrect amount
    is given by the user.

    Given I typed in my correct PIN
     When I try to withdraw <Requested Amount> from my account
     Then the ATM should dispense <Dispensed Amount>

    Examples:
     | Requested Amount | Dispensed Amount |
     | $200             | $200             |
     | $900             |   $0             |