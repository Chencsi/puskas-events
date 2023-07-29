import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import "./index.css";
import EventList from "./components/event-list.component";
import { events } from "./events";

const root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <EventList events={events} />
    </StrictMode>,
);