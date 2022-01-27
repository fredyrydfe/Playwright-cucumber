Feature: Login
    As a user, I want to login into the application to access the sell books feature

    Scenario: Login with wrong credentials
        Given the User is on the Login page
        When the user enters the username "test"
        And the user enters the password "wrongPassword"
        Then the user should see the error message "Invalid username or password"

    Scenario: Login with empty fields
        Given the User is on the Login page
        When the user submits the login form with empty fields
        Then the user should see the error message "Invalid username or password"

    Scenario: Login in the application
        Given the User is on the Login page
        When the user enters the username "test"
        And the user enters the password "secret"
        Then the user should see the Books page
