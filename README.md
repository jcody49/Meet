# Meet App 

## Project Overview

The Meet App is a progressive web application developed using React with a focus on serverless architecture and test-driven development (TDD). The app integrates with the Google Calendar API to fetch upcoming events and provides a range of features, including event filtering, toggling event details, specifying event count, offline support, home screen shortcut, and data visualization.


## How Serverless Functions are Utilized

Serverless functions are important to the Meet App's functionality, scalability, and responsiveness. Serverless functions are used in the following ways:

1. **Data Fetching and Processing:**
   Serverless functions are implemented to fetch event data from the Google Calendar API. The app ensures efficient data retrieval and minimizes frontend load.

2. **Authorization and Authentication:**
   Serverless functions handle OAuth2 authentication with the Google Calendar API. They manage user authentication, create access tokens, and ensure that users can access the requested data securely.

3. **Offline Support and Cache Management:**
   Serverless functions facilitate offline support by managing cached data. When the app is offline, these functions retrieve cached data, enabling users to view previously accessed event information without an internet connection.

4. **Dynamic Pricing and Recommendations:**
   If dynamic pricing or personalized recommendations are implemented, serverless functions can calculate pricing based on real-time factors or generate personalized event suggestions for users.

5. **Data Visualization Calculation:**
   Serverless functions compute and aggregate data to determine the number of events in each city or the popularity of different event genres.

6. **Backend API for User-Specific Data:**
   Serverless functions can serve as APIs for managing user-related data, such as favorites, preferences, and settings. This ensures that user-specific data is stored securely and can be accessed when needed.


## User Stories & Scenarios

### Feature 1: Filter Events By City

**User Story:**
As a user, I should be able to filter events by city so that I can see a list of events taking place in that city.

**Scenario: User filters events in a selected city**
Given the user navigated to the events page,
When the user selects "Colorado Springs" from the city dropdown, and the user clicks the "Filter" button,
Then the user will see a list of events taking place in Colorado Springs.

### Feature 2: Show/Hide Event Details

**User Story:**
As a user, I should be able to show/hide event details,
So that I can see more/less information about an event.

**Scenario: User hides event details**
Given the user has navigated to a specific event in the event page,
When the user selects the "Hide Details" button just below the event details,
Then the user will be prompted to select which options he/she would like to omit.

### Feature 3: Specify Number of Events

**User Story:**
As a user, I should be able to specify the number of events I want to view in the app,
So that I can see more or fewer events in the events list at once.

**Scenario: User specifies number of events he/she would like to view**
Given the user has navigated to the settings page via the navbar,
When the user selects the number of events he/she would like to see at a time from a dropdown,
Then the user will see a list with a length they specified.

### Feature 4: Use the App When Offline

**User Story:**
As a user, I should be able to use the app when offline,
So that I can see the events I viewed the last time I was online.

**Scenario: User can use the app offline**
Given the user is offline,
When the user opens the app and logs in,
Then the user will see the events they viewed when last online.

### Feature 5: Add an App Shortcut to the Home Screen

**User Story:**
As a user, I should be able to add the app shortcut to my home screen,
So that I can open the app faster.

**Scenario: User can add the app shortcut to their home screen**
Given the user has downloaded the app for 5 million dollars,
When the user views his/her home screen,
Then the user will see the icon.

### Feature 6: Display Charts Visualizing Event Details

**User Story:**
As a user, I should be able to see a chart showing the upcoming events in each city,
So that I know what events are organized in which city.

**Scenario: User accesses a chart showing the upcoming events in Colorado Springs**
Given the user has navigated to the events page,
When the user filters by city via typing it into a form,
Then the user will see a list of events scheduled in the given city.






