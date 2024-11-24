import React, {useEffect, useState} from 'react';
import './App.css';
import {CardList} from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
// include blueprint-icons.css for icon font support
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import Event from "./components/Event";
import axios from 'axios';




function App() {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetchEvents();
    }, []);
    const fetchEvents = () => {
        const params = {};

        axios.get('http://192.168.88.167:8000/events', {params})
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the events!', error);
            });
    };


    return (
        <div className="App">

            <CardList>
                {events.map((event, id) => (
                    <Event event={event} key={id}></Event>
                ))}

            </CardList>
        </div>
    );
}

export default App;
