import {getAndThen} from "./API";

function getEvents(params: any, setEvents: Function) {
    console.log('params:')
    console.log(params)
    getAndThen<Event>('/events', params, setEvents);
}

export interface Event {
    name:string;
    link:string;
    description:string | null;
    kind:string[];
    kind_rus:string[];
    sub_kind:string | null;
    date:string;
    timestamp_date:number;
    address:string | null;
}

export default getEvents;