import DatePicker from "./date/DatePicker";
import React, {useState} from 'react';
import KindSelect from "./select/KindSelect";
import {Kind} from "../api/Kinds";


const Filters: React.FC = () => {
    const [dates, setDates] = useState<Date | Date[]>([]);
    const [kind, setKind] = useState<Kind>();

    // Function to handle data from the child
    const handleDate = (data: Date | Date[]) => {
        setDates(data);
        let tmp = data?.toLocaleString();
        console.log('Data received from child:', data);
    };
    // Function to handle data from the child
    const handleKind = (kind: Kind) => {
        setKind(kind);
        console.log('Data received from child:', kind.title);
    };

    return (
        <>
            <DatePicker onSendData={handleDate} range={true}/>
            <KindSelect onSendData={handleKind}></KindSelect>

        </>
    );
};


export default Filters;