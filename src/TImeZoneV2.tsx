import React from 'react'


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

const TImeZoneV2 = () => {
    const data: SlotData[] = [
        {
            practitionerId: 106,
            slotId: 228,
            slotDate: "2024-03-18",
            slotTimes: [
                {
                    "slotTime": "2024-03-22T00:00:00Z",
                    "isBooked": false
                },
                {
                    "slotTime": "2024-03-22T01:00:00Z",
                    "isBooked": false
                },
                {
                    "slotTime": "2024-03-22T02:00:00Z",
                    "isBooked": false
                },
                {
                    "slotTime": "2024-03-22T03:00:00Z",
                    "isBooked": false
                },
                {
                    "slotTime": "2024-03-22T04:00:00Z",
                    "isBooked": false
                },
                {
                    "slotTime": "2024-03-22T17:00:00Z",
                    "isBooked": false
                },
                {
                    "slotTime": "2024-03-22T18:00:00Z",
                    "isBooked": false
                },
                {
                    "slotTime": "2024-03-22T19:00:00Z",
                    "isBooked": false
                },
                {
                    "slotTime": "2024-03-22T20:00:00Z",
                    "isBooked": false
                },
                {
                    "slotTime": "2024-03-22T21:00:00Z",
                    "isBooked": false
                },
                {
                    "slotTime": "2024-03-22T22:00:00Z",
                    "isBooked": false
                },
                {
                    "slotTime": "2024-03-22T23:00:00Z",
                    "isBooked": false
                }
            ]
        }
    ];


    const timeString = '2024-03-22T01:00:00Z'; // Time in unspecified timezone
    const utcTime = new Date(timeString); // Parse the time string
    const temp = new Date(utcTime)
    const localTime = temp.toLocaleString(); // Convert to local timezone

    // console.log(utcTime + "---" + localTime + "---" + temp); // Output will vary based on the browser's locale settings

    const localTime1 = new Date('2024-03-21T01:00:00Z');
    const utcTime1 = new Date(localTime1.getTime() + localTime1.getTimezoneOffset() * 60000).toISOString();
    console.log(utcTime1)
    return (
        <div>2024-03-22T01:00:00Z</div>
    )
}

export default TImeZoneV2