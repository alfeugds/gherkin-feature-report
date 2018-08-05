Feature: Testing Feature

    @manual @author
    Scenario: Wilson posts to his own blog
        Given I am logged in as Wilson
        When I try to post to "Expensive Therapy"
        Then I should see "Your article was published."

    @manual
    Scenario: Wilson fails to post to somebody else's blog
        Given I am logged in as Wilson
        When I try to post to "Greg's anti-tax rants"
        Then I should see "Hey! That's not your blog!"

    @component-behavior
    Scenario: Greg posts to a client's blog
        Given I am logged in as Greg
        When I try to post to "Expensive Therapy"
        Then I should see "Your article was published."

    Scenario: Greg posts to a client's blog 2
        Given I am logged in as Greg
        When I try to post to "Expensive Therapy"
        Then I should see "Your article was published."

    @manual
    Scenario Outline: Greg posts to a client's blog 2 outline test
        Given I am logged in as Greg
        When I try to post to "Expensive Therapy"
        Then I should see "Your article was published."
