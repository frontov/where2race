import DatePicker from "../date/DatePicker";
import React, {useState} from 'react';
import KindSelect from "../select/KindSelect";
import {allKinds, Kind} from "../../api/Kinds";
import {Button} from "@blueprintjs/core";
import "./filter.css"

interface Props {
    onSendData: (kind: Kind, dates: Date[]) => void;
}


const Filters: React.FC<Props> = (props: Props) => {
    const [dates, setDates] = useState<Date[]>([]);
    const [kind, setKind] = useState<Kind>(allKinds);

    // Function to handle data from the child
    const handleDate = (dates: Date[]) => {
        setDates(dates);
        // props.onSendData(kind, dates);
    };
    // Function to handle data from the child
    const handleKind = (kind: Kind) => {
        setKind(kind);
        // props.onSendData(kind, dates);

    };

    const handleClick = () => {
        props.onSendData(kind, dates);
    }

    return (
        <div className="filter-container">
            <DatePicker onSendData={handleDate} range={true}/>
            <KindSelect onSendData={handleKind}></KindSelect>
            <Button text='go!'
                    className="button fit"
                    onClick={handleClick}></Button>
        </div>
    );
};


export default Filters;