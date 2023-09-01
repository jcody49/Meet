import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import Event from "../components/Event";

// Mock event data
const events = [
  {
    "kind": "calendar#event",
    "etag": "\"3181159875584000\"",
    "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200608T120000Z",
    "status": "confirmed",
    "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MDhUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
    "created": "2020-05-19T19:14:30.000Z",
    "updated": "2020-05-27T11:45:37.792Z",
    "summary": "React is Fun",
    "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
    "location": "Berlin, Germany",
    "creator": {
      "email": "fullstackwebdev@careerfoundry.com",
      "self": true
    },
    "organizer": {
      "email": "fullstackwebdev@careerfoundry.com",
      "self": true
    },
    "start": {
      "dateTime": "2020-06-08T14:00:00+02:00",
      "timeZone": "Europe/Berlin"
    },
    "end": {
      "dateTime": "2020-06-08T15:00:00+02:00",
      "timeZone": "Europe/Berlin"
    },
    "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
    "originalStartTime": {
      "dateTime": "2020-06-08T14:00:00+02:00",
      "timeZone": "Europe/Berlin"
    },
    "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
    "sequence": 0,
    "reminders": {
      "useDefault": true
    },
    "eventType": "default"
  }
];


// Tests for the single event in the array
describe("<Event /> component", () => {
    // Test: Checking if the event location is rendered correctly
    test("renders event location", () => {
      render(<Event event={events[0]} />);
      expect(screen.getByText(events[0].location)).toBeInTheDocument();
    });
  
    // Test: Checking if the event name is rendered correctly
    test("renders event name", () => {
      render(<Event event={events[0]} />);
      expect(screen.getByText(events[0].summary)).toBeInTheDocument();
    });
  
    // Test: Checking if the event date is rendered correctly
    test("renders event date", () => {
      render(<Event event={events[0]} />);
      expect(screen.getByText(events[0].start.dateTime)).toBeInTheDocument();
    });
  
    // Test: Checking if the event details button and content are displayed correctly
    test("renders event details button with the title (show details)", () => {
      render(<Event event={events[0]} />);
      expect(screen.getByText("Show Details")).toBeInTheDocument();
      expect(
        screen.queryByText(/Love HTML, CSS, and JS?/)
      ).not.toBeInTheDocument();
    });
  
    // Test: by default, event's details section should be hidden
    test("by default, event's details section should be hidden", () => {
      render(<Event event={events[0]} />);
      expect(screen.queryByText(/Love HTML, CSS, and JS?/)).not.toBeInTheDocument();
    });
  
    // Test: shows the details section when the user clicks on the 'show details' button
    test("shows the details section when the user clicks on the 'show details' button", async () => {
      render(<Event event={events[0]} />);
      const showDetailsButton = screen.getByText("Show Details");
      fireEvent.click(showDetailsButton);
      expect(screen.getByText(/Love HTML, CSS, and JS?/)).toBeInTheDocument();
    });
  
    // Test: hides the details section when the user clicks on the 'hide details' button
    test("hides the details section when the user clicks on the 'hide details' button", async () => {
      render(<Event event={events[0]} />);
      const showDetailsButton = screen.getByText("Show Details");
      fireEvent.click(showDetailsButton);
      const hideDetailsButton = screen.getByText("Hide Details");
      fireEvent.click(hideDetailsButton);
      expect(screen.queryByText(/Love HTML, CSS, and JS?/)).not.toBeInTheDocument();
    });
});