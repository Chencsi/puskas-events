import React from "react";
import Event from "./event.component";

const EventList = ({ events }) => {
    const eventComponents = events.map((event) => {
        return(
            <Event
                key={event.eventId}
                id={event.eventId}
                image={event.eventImageSource}
                name={event.eventName}
                date={event.eventStartDate}
                location={event.eventLocation}
                pay={event.eventHourlyPays}
                start={event.eventStarts}
                end={event.eventEnds}
            />
        );
    });
    return(
        <div className="container rounded-lg bg-slate-100 py-3 px-5 mx-auto shadow dark:bg-slate-700">
            <ul role="list">
            {eventComponents}
            </ul>
        </div>
    );
}

export default EventList;