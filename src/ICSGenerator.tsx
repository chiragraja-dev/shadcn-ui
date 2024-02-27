import React, { useState, useEffect } from 'react';
import { createEvent, DateArray } from 'ics';
import { format, parseISO, getYear, getMonth, getDate, getHours, getMinutes } from 'date-fns';

const ICSGenerator: React.FC = () => {
    const [icsData, setIcsData] = useState<string | null>(null);

    useEffect(() => {
        const date1 = "2023-10-24T01:00:00Z";
        const date2 = '2023-10-24T03:30:00Z'
        const startDateArray = convertDateToArr(date1);
        const endDateArray = convertDateToArr(date2);
        const event: any = {
            start: startDateArray, // Date of the all-day event
            end: endDateArray,   // Date after the all-day event
            title: "myevent",
            //description:,
        };

        createEvent(event, (error, value) => {
            console.log(error)
            console.log(" value " + value)
            if (!error) {
                setIcsData(value);

            } else {
                console.error('Error generating ICS:', error);
            }
        });
    }, []);

    const downloadICS = () => {
        if (icsData) {
            const blob = new Blob([icsData], { type: 'text/calendar' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'all-day-event.ics';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
    };

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedOption(event.target.value);
    };

    function convertDateToArr(dateString: string) {
        const date = parseISO(dateString);
        const year = getYear(date);
        const month = getMonth(date) + 1; // Months are zero-based
        const day = getDate(date);
        const hours = getHours(date);
        const minutes = getMinutes(date);

        return [year, month, day, hours, minutes];
    }

    return (
        <div>
            {/* No "Generate ICS" button needed */}
            {icsData && <button onClick={downloadICS}>Download ICS</button>}
        </div>
    );
};

export default ICSGenerator;
