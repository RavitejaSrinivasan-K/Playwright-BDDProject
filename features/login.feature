
Feature: Validate Login Functionality

   @smoke
   Scenario: User login with valid credentails
      Given I am open the SauceDemo
      When I am enter username
      When I am enter password
      And I am click on Login Button
      Then I should see DashBoard Page


   @sanity #AMA-675 - jira ticket
   Scenario: User login with invalid credentails
      Given I am open the SauceDemo
      When I am enter username
      When I am enter password
      And I am click on Login Button
      Then I should handle error


   @reg
   Scenario Outline: Multi set of datas

      Given  I am open the URL
      When I am enter "<username>" and "<password>"
      And I am click on Login Button
      Then I should handle error or dashboard


      Examples:
         | username        | password       |
         | standard_user   | secret_sauce   |
         | locked_out_user | secret_sauce   |
         | wrong username  | wrong password |


