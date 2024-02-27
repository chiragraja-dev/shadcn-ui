import React, { useState, useEffect } from 'react';

const TimeIntervalCalculator: React.FC = () => {
    const [startTimeInterval, setStartTimeInterval] = useState<string>('6:30 AM'); // Default starting time set to '6:30 AM'
    const [interval, setInterval] = useState<number>(0.5);
    const [nextTimes, setNextTimes] = useState<string[]>([]);

    useEffect(() => {
        calculateTimes();
    }, [startTimeInterval, interval]);

    const calculateTimes = () => {
        const nextTimesList: string[] = [];
        let currentTime = startTimeInterval;

        for (let i = 0; i < 12; i++) {
            nextTimesList.push(currentTime);
            // Parse current time and add the interval
            const [hours, minutes, period] = currentTime.split(/:| /);
            const date = new Date();
            // Convert hours to 24-hour format
            let hourValue = parseInt(hours, 10);
            if (period === 'PM' && hourValue !== 12) {
                hourValue += 12;
            } else if (period === 'AM' && hourValue === 12) {
                hourValue = 0;
            }

            date.setHours(hourValue, parseInt(minutes));
            date.setMinutes(date.getMinutes() + interval * 60);

            let nextHours = String(date.getHours() % 12 || 12).padStart(2, '0');
            const nextPeriod = date.getHours() >= 12 ? 'PM' : 'AM';

            const nextMinutes = String(date.getMinutes()).padStart(2, '0');
            currentTime = `${nextHours}:${nextMinutes} ${nextPeriod}`;
        }

        setNextTimes(nextTimesList);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Time Interval Calculator</h1>
            <div className="mb-4">
                <label htmlFor="startTime" className="block text-gray-600">
                    Select starting time:
                </label>
                <select
                    id="startTime"
                    value={startTimeInterval}
                    onChange={(e) => setStartTimeInterval(e.target.value)}
                    className="w-full p-2 border rounded-md"
                >
                    <option value="6:30 AM">6:30 AM</option>
                    <option value="7:00 AM">7:00 AM</option>
                    {/* Add more options as needed */}
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="interval" className="block text-gray-600">
                    Select interval:
                </label>
                <select
                    id="interval"
                    value={interval}
                    onChange={(e) => setInterval(parseFloat(e.target.value))}
                    className="w-full p-2 border rounded-md"
                >
                    <option value={0.25}>15 minutes</option>
                    <option value={0.5}>30 minutes</option>
                    <option value={1}>1 hour</option>
                    {/* Add more options as needed */}
                </select>
            </div>

            <h2 className="text-xl font-semibold mt-4">Next 12 Times:</h2>
            <ul className="list-disc list-inside mt-2">
                {nextTimes.map((time, index) => (
                    <li key={index} className="text-lg">
                        {time}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TimeIntervalCalculator;
