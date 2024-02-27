import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './App.css';

const MultipleDatePicker = () => {
    const [selectedDates, setSelectedDates] = useState<Date[]>([]);

    const handleDateChange = (date: Date) => {
        if (!selectedDates.includes(date)) {
            setSelectedDates([...selectedDates, date]);
        }
    };

    const removeDate = (date: Date) => {
        const updatedDates = selectedDates.filter((d) => d !== date);
        setSelectedDates(updatedDates);
    };

    return (
        <div className="w-1/2 mx-auto mt-8">
            <div className="mb-4">
                <DatePicker
                    selected={null}
                    onChange={handleDateChange}
                    dateFormat="MMMM d, yyyy"
                    isClearable
                    className='border-2 '
                />
            </div>
            <div className="flex flex-wrap">
                {selectedDates.map((date) => (
                    <div key={date.toString()} className="m-1">
                        <span className="bg-blue-500 text-white px-2 py-1 rounded-md">
                            {date.toLocaleDateString()}
                            <button
                                className="ml-1 bg-red-500 text-white px-1 rounded-md"
                                onClick={() => removeDate(date)}
                            >
                                x
                            </button>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default MultipleDatePicker;
