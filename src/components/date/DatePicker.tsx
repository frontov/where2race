import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import "./DatePicker.css"

import React, {useEffect, useRef} from "react";

interface Props {
    onSendData: (data: Date[]) => void;
    range: boolean;
}

const DatePicker: React.FC<Props> = (props: Props) => {
    const datepickerRef = useRef<HTMLInputElement | null>(null);
    const datepicker = useRef<AirDatepicker | null>(null);


    useEffect(() => {
        if (datepickerRef.current) {
            datepicker.current = new AirDatepicker(datepickerRef.current, {
                onSelect: ({date}) => {
                    // Update the state with the selected dates
                    if (!Array.isArray(date)) {
                        date = Array.of(date);
                    }

                    props.onSendData(date);
                },

                // You can add more options here
                dateFormat: 'dd.MM.yyyy',
                multipleDates: true,
                multipleDatesSeparator: '-',
                range: props.range
            });

            // Cleanup function to destroy the datepicker instance
            return () => {
                datepicker.current?.destroy();
            };
        }
    }, []);


    useEffect(() => {
        // Update if props are changed
        datepicker.current?.update({...props});
    });

    return <div className='date-picker-container'>
        <label>когда?</label>
        <input ref={datepickerRef}
               className='date-picker'
               onClick={e => {
                   console.log(e);
               }}

        />
    </div>;
}

export default DatePicker;
