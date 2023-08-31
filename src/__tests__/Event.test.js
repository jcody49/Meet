import React from "react";
import { render } from "@testing-library/react";
import Event from "../components/Event"; 
import { event } from "../components/Event";


describe("<Event /> component", () => {

    test('renders event location', (event) => {
        const EventComponent = render(<Event />);
        const { queryByText } = render(<Event event={event} />);
        expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    });

});
