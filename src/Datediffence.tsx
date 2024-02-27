import React, { useState, useEffect } from 'react';
import moment from 'moment';

const DateDifferenceCalculator: React.FC = () => {
    const [date1, setDate1] = useState<string>('');
    const [date2, setDate2] = useState<string>('');
    const [dateDifference, setDateDifference] = useState<string>('');

    useEffect(() => {
        const momentDate1 = moment(date1);
        const momentDate2 = moment(date2);

        if (!momentDate1.isValid() || !momentDate2.isValid()) {
            setDateDifference('');
            return;
        }

        const yearsDifference = momentDate2.diff(momentDate1, 'years');
        const monthsDifference = momentDate2.diff(momentDate1, 'months');
        const daysDifference = momentDate2.diff(momentDate1, 'days');

        // Calculate months and days within years
        const monthsWithinYears = monthsDifference % 12;
        const daysWithinMonths = daysDifference % 30; // Assuming an average of 30 days in a month

        const formattedDifference = [];

        if (yearsDifference > 0) {
            formattedDifference.push(`${yearsDifference} year${yearsDifference > 1 ? 's' : ''}`);
        }

        if (monthsWithinYears > 0) {
            formattedDifference.push(`${monthsWithinYears} month${monthsWithinYears > 1 ? 's' : ''}`);
        }

        if (daysWithinMonths > 0) {
            formattedDifference.push(`${daysWithinMonths} day${daysWithinMonths > 1 ? 's' : ''}`);
        }

        setDateDifference(formattedDifference.join(', '));
    }, [date1, date2]);

    return (
        <div className='bg-yellow-400 lg:ml-72 w-full'>
            <h1>Date Difference Calculator</h1>
            <div>
                <label>Date 1: </label>
                <input type="date" value={date1} onChange={(e) => setDate1(e.target.value)} />
            </div>
            <div>
                <label>Date 2: </label>
                <input type="date" value={date2} onChange={(e) => setDate2(e.target.value)} />
            </div>
            <select
                name=""
                id=""
                className='p-2 text-headingTextColor mt-2 rounded-sm border focus:outline-headingTextColor focus:border'
            >
                <option value="" selected>
                    {dateDifference}
                </option>
            </select>



            
        </div>
    );
};

export default DateDifferenceCalculator;
