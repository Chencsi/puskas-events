import React from "react";
import Event from "./event.component";

const EventList = ({ events }) => {
    const eventComponents = events.map((event) => {
        return(
            <Event
                key={event.id}
                id={event.eventId}
                name={event.eventName}
                date={event.eventStartDate}
                pay={event.eventHourlyPays}
            />
        );
    });
    return(
        <div>
            {eventComponents}
        </div>
    );
}

export default EventList;