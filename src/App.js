import React, { Component } from "react";
import EventList from "./components/event-list.component";
import { events } from "./events";
import SearchBox from "./components/searchbox.component";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            events: events,
            searchfield: ""
        }
    }

    onSearchChange = (evt) => {
        this.setState({ searchfield: evt.target.value })
    }

    render(){
        const filteredEvents = this.state.events.filter((event) => {
            return event.eventName
                .toLowerCase()
                .includes(this.state.searchfield.toLocaleLowerCase());
        });
        return(
            <div>
                <h1 class="my-7 text-3xl font-extrabold text-slate-7 00 dark:text-white md:text-5xl lg:text-6xl text-center">Legutóbbi és közelgő események</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <EventList events={filteredEvents} />
            </div>
        );
    }
}

export default App;