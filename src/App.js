import React from "react";
import EventList from "./components/event-list.component";
import { events } from "./events";

const App = () => {
    return(
        <div>
            <h1 class="my-7 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">Legutóbbi és közelgő események</h1>
            <EventList events={events} />
        </div>
    );
}

export default App;