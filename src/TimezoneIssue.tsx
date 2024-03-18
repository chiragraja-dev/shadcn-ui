import React from 'react';

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

const data: SlotData[] = [
    {
        practitionerId: 106,
        slotId: 228,
        slotDate: "2024-03-18",
        slotTimes: [
            { slotTime: "01:00 AM", isBooked: false },
            { slotTime: "02:00 AM", isBooked: false },
            { slotTime: "02:45 AM", isBooked: false },
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

// const convertToUTC = (dateStr: string, timeStr: string): string => {
//     const [time, modifier] = timeStr.split(' ');
//     let [hours, minutes] = time.split(':');
//     if (hours === '12') {
//         hours = '00';
//     }
//     if (modifier === 'PM') {
//         hours = String(parseInt(hours, 10) + 12);
//     }
//     const [year, month, day] = dateStr.split('-');
//     const utcTime = new Date(`${year}-${month}-${day}T${hours}:${minutes}`);
//     const formattedDate = `${utcTime.getUTCFullYear()}-${(utcTime.getUTCMonth() + 1).toString().padStart(2, '0')}-${utcTime.getUTCDate().toString().padStart(2, '0')}`;
//     const formattedTime = `${utcTime.getUTCHours().toString().padStart(2, '0')}:${utcTime.getUTCMinutes().toString().padStart(2, '0')}:${utcTime.getUTCSeconds().toString().padStart(2, '0')} ${modifier}`;
//     return `${formattedDate} ${formattedTime}`;
// }

// const convertToUTC = (dateStr: string, timeStr: string): string => {
//     const [time, modifier] = timeStr.split(' ');
//     let [hours, minutes] = time.split(':');
//     if (hours === '12') {
//         hours = '00';
//     }
//     if (modifier === 'PM') {
//         hours = String(parseInt(hours, 10) + 12);
//     }
//     return `${dateStr} ${hours}:${minutes}`;
// }

const TimezoneIssue: React.FC = () => {
    // const convertedData = data.map(slotData => ({
    //     ...slotData,
    //     slotTimes: slotData.slotTimes.map(slot => ({
    //         ...slot,
    //         slotTime: convertToUTC(slotData.slotDate, slot.slotTime)
    //     }))
    // }));



    function convertToISO(slotDate: string, slotTime: string): any {
        // console.log(slotTime, "gfhjk")
        const dateTimeString = `${slotDate}T${slotTime.replace(" PM", "").replace(" AM", "")}`;
        const dateObj = new Date(dateTimeString);
        return dateObj.toISOString();
    }



    // console.log(data)



    const localTime = new Date('2024-03-18T01:00:00');
    const utcTime = new Date(localTime.getTime() + localTime.getTimezoneOffset() * 60000).toISOString();
    const localTemp = new Date(utcTime);
    const localTimeString = utcTime.toLocaleString();

    // console.log(localTimeString);


    // function formatTimestamp(timestamp: string | number | Date) {
    //     const dateObj = new Date(timestamp);
    //     const year = dateObj.getFullYear();
    //     const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    //     const day = String(dateObj.getDate()).padStart(2, '0');
    //     let hours = dateObj.getHours();
    //     const minutes = String(dateObj.getMinutes()).padStart(2, '0');
    //     const ampm = hours >= 12 ? 'PM' : 'AM';
    //     hours = hours % 12;
    //     hours = hours ? hours : 12; // 0 should be 12
    //     const formattedHours = String(hours).padStart(2, '0');
    //     return `${year}-${month}-${day} ${formattedHours}:${minutes} ${ampm}`;
    // }

    // function formatTimestamp(timestamp: string | number | Date) {
    //     // const dateObj = new Date(timestamp);
    //     // const year = dateObj.getFullYear();
    //     // const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    //     // const day = String(dateObj.getDate()).padStart(2, '0');
    //     // const hours = String(dateObj.getHours()).padStart(2, '0');
    //     // const minutes = String(dateObj.getMinutes()).padStart(2, '0');
    //     // return `${year}-${month}-${day} ${hours}:${minutes}`;

    //     // const timeString = new Date(timestamp).toISOString().slice(11, 16); // Extracting time part (hh:mm)
    //     // return timeString;

    //     // const date = new Date(timestamp);
    //     // let hours = date.getHours();
    //     // const minutes = date.getMinutes();
    //     // const ampm = hours >= 12 ? 'PM' : 'AM';
    //     // hours = hours % 12;
    //     // hours = hours ? hours : 12; // Handle midnight (0 hours)
    //     // const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    //     // return formattedTime;

    //     const date = new Date(timestamp);
    //     const hours = date.getUTCHours();
    //     const minutes = date.getUTCMinutes();
    //     return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
    // }


    function formatTimestamp(timestamp: any) {
        const date = new Date(timestamp);
        let hours = date.getUTCHours();

        console.log(hours)
        const minutes = date.getUTCMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours || 12;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    }




    return (
        <div>
            {/* new Date("2024-03-18 08:00:00 AM").toLocaleTimeString() */}
            {/* {convertedData.map((slotData, index) => (
                <div key={index}>
                    <h3>Practitioner ID: {slotData.practitionerId}</h3>
                    <h3>Slot ID: {slotData.slotId}</h3>
                    <h3>Slot Date: {slotData.slotDate}</h3>
                    <ul>
                        {slotData.slotTimes.map((slot, idx) => (
                            <li key={idx}>
                                {slot.slotTime}{" ------ "}
                                {new Date(slot.slotTime).toLocaleTimeString()}
                            </li>
                        ))}
                    </ul>
                </div>
            ))} */}
            {/* {
                data.map(slotData => {
                    slotData.slotTimes.forEach(slotTime => {
                        <>{slotTime}</>
                    });
                })} */}
            {
                data.map((slotData) => (
                    slotData.slotTimes.map((slotTime, index) => {
                        const localTime = new Date(convertToISO(slotData.slotDate, slotTime.slotTime));
                        const utcTime = new Date(localTime.getTime() + localTime.getTimezoneOffset() * 60000).toISOString();
                        // console.log(utcTime.toLocaleString());
                        // console.log(utcTime)
                        // const localTemp = new Date(utcTime);
                        // const localTimeString = utcTime.toLocaleString();
                        return (<>
                            <div key={index} className='grid grid-cols-2 border gap-12'>
                                <p>{formatTimestamp(utcTime.toLocaleString())}</p>
                                <p> {utcTime.toLocaleString()}</p>
                            </div>
                        </>)
                    }
                    )
                ))
            }

        </div>
    );
}

export default TimezoneIssue;
