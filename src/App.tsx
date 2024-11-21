import React from 'react';
import './App.css';
import {CardList} from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
// include blueprint-icons.css for icon font support
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import Event from "./components/Event";

// todo remove after adding api
let item = {"name":"Марафон 2025","link":"https://russiarunning.com/event/TreylfestZmeyka2025","description":"","kind":"running","kind_rus":"Лыжи","sub_kind":"","date":"20.09.25","timestamp_date":1758344400,"address":"Далеко"}
let item1 = {"name":"Марафон 2025","link":"https://russiarunning.com/event/TreylfestZmeyka2025","description":"","kind":"skiing","kind_rus":"Лыжи","sub_kind":"","date":"20.09.25","timestamp_date":1758344400,"address":"Далеко"}
let item2 = {"name":"Марафон 2025","link":"https://russiarunning.com/event/TreylfestZmeyka2025","description":"","kind":"other","kind_rus":"Лыжи","sub_kind":"","date":"20.09.25","timestamp_date":1758344400,"address":"Далеко"}
let item3 = {"name":"Марафон 2341234","link":"https://russiarunning.com/event/TreylfestZmeyka2025","description":"","kind":"cycling","kind_rus":"Лыжи","sub_kind":"","date":"20.09.25","timestamp_date":1758344400,"address":"Далеко"}

function App() {
    return (
        <div className="App">

            <CardList>
               <Event event={item}></Event>
               <Event event={item1}></Event>
               <Event event={item2}></Event>
               <Event event={item3}></Event>

            </CardList>
        </div>
    );
}

export default App;
