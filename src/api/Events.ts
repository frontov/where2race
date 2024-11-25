import get from "./API";

function getEvents(params: any, setEvents: Function) {
    get('/events', params, setEvents);
}

export default getEvents;