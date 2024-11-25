import React, {useEffect, useState} from 'react';
import './App.css';
import {CardList} from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
// include blueprint-icons.css for icon font support
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import Event from "./components/Event";
import getEvents from "./api/Events";
import Filters from "./components/Filters";


let params = {};

function App() {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetchEvents(params);
    }, []);

    const fetchEvents = (p: any) => {
        getEvents(p, setEvents)
    };


    return (
        <div className="App">

            <Filters/>
            <CardList>
                {events.map((event, id) => (
                    <Event event={event} key={id}></Event>
                ))}

            </CardList>
        </div>
    );
}

export default App;
