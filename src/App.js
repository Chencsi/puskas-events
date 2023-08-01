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

    onSearchChange = (event) => {
        console.log(event.target.value);
    }

    render(){
        return(
            <div>
                <h1 class="my-7 text-3xl font-extrabold text-slate-700 dark:text-white md:text-5xl lg:text-6xl text-center">Legutóbbi és közelgő események</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <EventList events={this.state.events} />
            </div>
        );
    }
}

export default App;