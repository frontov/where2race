import {allKinds, Kind} from "../api/Kinds";
import {Event} from "../api/Events";

const kindMatch = (kind: Kind, event: Event): boolean => {
    return kind === allKinds
        ?
        !event.kind.includes('other')
        :
        event.kind.includes(kind.name)
}

const dateMatch = (dates: Date[], event: Event): boolean => {
    console.log( getTimestamp(dates[0]));
    console.log(event.timestamp_date);

    if (dates.length === 0) {
        return true;
    }
    if (dates.length === 1) {
        return event.timestamp_date > getTimestamp(dates[0]);
    }
    return event.timestamp_date >  getTimestamp(dates[0]) && event.timestamp_date <  getTimestamp(dates[1]);
}

const match = (dates: Date[], kind: Kind, event: Event): boolean => {
    let res =  dateMatch(dates, event) && kindMatch(kind, event);
    return res
}

const getTimestamp = (date: Date): number => {
    return date?.getTime() / 1000;
}


export default match;