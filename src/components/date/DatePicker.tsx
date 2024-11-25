import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import "./DatePicker.css"

import React, {useEffect, useRef, useState} from "react";

interface DatePickerProps {
    onSendData: (data: Date | Date[]) => void;
    range: boolean;
}

const DatePicker: React.FC<DatePickerProps> = (props: DatePickerProps) => {
    const datepickerRef = useRef<HTMLInputElement | null>(null);
    const datepicker = useRef<AirDatepicker | null>(null);
    const [selectedDates, setSelectedDates] = useState<Date | Date[]>([]);


    useEffect(() => {
        if (datepickerRef.current) {
            datepicker.current = new AirDatepicker(datepickerRef.current, {
                onSelect: ({date, formattedDate, datepicker}) => {
                    // Update the state with the selected dates
                    setSelectedDates(date);
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


    // useEffect(() => {
    //     // Update if props are changed
    //     datepicker.current?.update({...props});
    // });

    return <input ref={datepickerRef}
                  className='date-picker'
                  onChange={e => {
                      console.log(e);
                  }}

    />;
}

export default DatePicker;
