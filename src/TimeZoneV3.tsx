import React, { useEffect, useState } from 'react'

interface Slot {
    slotTime: string;
    isBooked: boolean;
}

interface SlotData {
    practitionerId: number;
    slotId: number;
    slotDate: string;
    slotTimes: Slot[];
}

const TimeZoneV3 = () => {
    const data: SlotData[] = [
        {
            practitionerId: 106,
            slotId: 228,
            slotDate: "2024-03-18",
            slotTimes: [
                { slotTime: "01:00 AM", isBooked: false },
                { slotTime: "02:00 AM", isBooked: false },
                { slotTime: "03:00 AM", isBooked: false },
                { slotTime: "04:00 AM", isBooked: false },
                { slotTime: "05:00 AM", isBooked: false },
                { slotTime: "06:00 AM", isBooked: false },
                { slotTime: "07:00 AM", isBooked: false },
                { slotTime: "08:00 AM", isBooked: false },
                { slotTime: "09:00 AM", isBooked: false },
                { slotTime: "10:00 AM", isBooked: false },
                { slotTime: "11:00 AM", isBooked: false },
                { slotTime: "12:00 PM", isBooked: false }
            ]
        }
    ];
    // Sun, 17 Mar 2024 18:30:00 GMT
    const utcTime = new Date("Sun, 17 Mar 2024 18:30:00 GMT");
    // const localTime = utcTime.toLocaleString(); // This will convert the time to the local timezone

    // console.log(localTime); // Output will vary based on the local timezone

    const [localTime, setLocalTime] = useState<Date | null>(null);

    useEffect(() => {
        const fetchLocalTime = async () => {
            // Assuming the time string provided is in 'YYYY-MM-DD HH:mm' format
            const timeString = '2024-03-22 01:00'; // Time string provided
            const [year, month, day, hours, minutes] = timeString.split(/[- :]/).map(parseFloat);
            const utcTime = new Date(Date.UTC(year, month - 1, day, hours, minutes));
            console.log(utcTime)
            const localOffset = new Date().getTimezoneOffset(); // Get local timezone offset in minutes
            const localTimeInMilliseconds = utcTime.getTime() - (localOffset * 60 * 1000);
            const localTime = new Date(localTimeInMilliseconds);
            setLocalTime(localTime);
        };

        fetchLocalTime();
    }, []);

    console.log(localTime)
    return (
        // 
        <div>
            {
                data.map((slotData) => (
                    slotData.slotTimes.map((slotTime, index) => {
                        const data1 = new Date(`${slotData.slotDate}T${slotTime.slotTime.replace(" PM", "").replace(" AM", "")}`);
                        // const UTC = data1.toUTCString();
                        // const UTC2 = new Date(data1.toISOString()).toLocaleString();
                        // console.log((UTC2))
                        return <>
                            {/* {localTime} */}
                        </>
                    })))}

        </div>
    )
}

export default TimeZoneV3