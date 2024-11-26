import {getAndThen} from "./API";

function getEvents(params: any, setEvents: Function) {
    getAndThen('/events', params, setEvents);
}

export default getEvents;