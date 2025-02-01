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
import {allKinds, Kind} from "./api/Kinds";
import match from "./utils/FilterUtils";
import Loader from "./components/Loader";


function App() {
    const [events, setEvents] = useState<Event[]>([]);
    const [dates, setDates] = useState<Date[]>([]);
    const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
    const [isDataFetched, setIsDataFetched] = useState<boolean>(false);

    useEffect(() => {
        fetchEvents({

            'start_date': dates.length > 0 ? dates[0].getTime() : null,
            'end_date': dates.length > 1 ? dates[1].getTime() : null,

        });

    }, [dates]);

    useEffect(() => {
        if (isDataFetched) {

            handleFilter(allKinds, [])
            console.log("setFilteredEvents")
            console.log(events)
        }

    }, [isDataFetched, events]);

    const fetchEvents = (p: any) => {
        // if (isDataFetched) {
        //     console.log("events already fetched");
        // } else {
        setIsDataFetched(false);

        getEvents(p, setEvents)
        setIsDataFetched(true);

        // }
    };


    const handleFilter = (kind: Kind, dates: Date[]) => {

        console.log('Data received from child:', kind.title);
        console.log('Data received from child:', dates);
        if (dates.length > 0) {
            console.log(dates[0].getTime() / 1000);
            setDates(dates)
        }
        console.log('pre filter');
        console.log("events.length");
        console.log(events.length);
        let filter = events.filter((element) => {
            return match(dates, kind, element);
        });

        console.log("events.length after");
        console.log(filter.length);

        setFilteredEvents(filter);

    };

    return (
        <div className="App">
            <Filters onSendData={handleFilter}/>
            {isDataFetched ?
                (
                    <CardList>
                        {filteredEvents.map((event, id) => (
                            <EventItem event={event} key={id}></EventItem>
                        ))}

                    </CardList>
                )
                :
                (
                    <Loader/>
                )}

        </div>
    );
}

export default App;
