Feature: Show/hide an event's details

    Scenario: An event element is collapsed by default.
        Given the user first opens the app
        When the user recieves the full list of events (specific for the city or all events)
        Then all events will colapse by default.


    Scenario: User can expand an event to see details.
        Given the user gets a list of events
        When a user selects an event's details
        Then the details will show up for that chosen event


    Scenario: User can collapse an event to hide details.
        Given the user sees the details of an event
        When the user presses a button to hide event's details
        Then the details of that even will be hidden