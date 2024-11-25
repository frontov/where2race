import DatePicker from "./date/DatePicker";
import React, {useState} from 'react';


const Filters: React.FC = () => {
    const [dates, setDates] = useState<Date | Date[]>([]);

    // Function to handle data from the child
    const handleDate = (data: Date | Date[]) => {
        setDates(data);
        let tmp = data?.toLocaleString();
        console.log('Data received from child:', data);
    };

    return (
        <>
            <DatePicker onSendData={handleDate} range={true}/>

        </>
    );
};


export default Filters;