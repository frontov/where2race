import React, {useEffect, useState} from 'react';
import './App.css';
import {CardList} from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
// include blueprint-icons.css for icon font support
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import EventItem from "./components/EventItem";
import {Event} from "./api/Events";
import getEvents from "./api/Events";
import Filters from "./components/filter/Filters";
import {Kind} from "./api/Kinds";
import match from "./utils/FilterUtils";


let params = {};

function App() {
    const [events, setEvents] = useState<Event[]>([]);
    const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
    const [isDataFetched, setIsDataFetched] = useState<boolean>(false);

    useEffect(() => {
        fetchEvents(params);
        console.log("fetchEvents")
        setIsDataFetched(true);
    }, []);

    useEffect(() => {
        if (isDataFetched) {

            setFilteredEvents(events);
            console.log("setFilteredEvents")
            console.log(events)
        }

    }, [isDataFetched, events]);

    const fetchEvents = (p: any) => {
        if (isDataFetched){
            console.log("events already fetched");
        } else {
            getEvents(p, setEvents)
        }
    };


    const handleFilter = (kind: Kind, dates: Date[]) => {

        console.log('Data received from child:', kind.title);
        console.log('Data received from child:', dates);
        if (dates.length > 0) {
            console.log(dates[0].getTime()/1000);
        }
        console.log('pre filter');
        console.log("events.length");
        console.log(events.length);
        let filter = events.filter((element) => {
            return match(dates, kind, element);
        });

        console.log("events.length after");
        console.log(events.length);

        setFilteredEvents(filter);

    };

    return (
        <div className="App"

             >
            <Filters onSendData={handleFilter}/>
            <CardList>
                {filteredEvents.map((event, id) => (
                    <EventItem event={event} key={id}></EventItem>
                ))}

            </CardList>
        </div>
    );
}

export default App;
