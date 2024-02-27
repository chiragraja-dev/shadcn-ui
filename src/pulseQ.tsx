import React from 'react';

const PulseQ: React.FC = () => {


    const pulseOptionsList = [
        {
            "pulseOptionId": 40,
            "pulseOptionName": "Covered",
            "doshas": "Vata",
            "uniqueKey": "BV1"
        },
        {
            "pulseOptionId": 41,
            "pulseOptionName": "Covered",
            "doshas": "Pitta",
            "uniqueKey": "BP1"
        },
        {
            "pulseOptionId": 42,
            "pulseOptionName": "Covered",
            "doshas": "Kapha",
            "uniqueKey": "BK1"
        },
        {
            "pulseOptionId": 43,
            "pulseOptionName": "Clear",
            "doshas": "Vata",
            "uniqueKey": "BV1"
        },
        {
            "pulseOptionId": 44,
            "pulseOptionName": "Clear",
            "doshas": "Pitta",
            "uniqueKey": "BP1"
        },
        {
            "pulseOptionId": 45,
            "pulseOptionName": "Clear",
            "doshas": "Kapha",
            "uniqueKey": "BK1"
        },
        {
            "pulseOptionId": 46,
            "pulseOptionName": "Dull",
            "doshas": "Vata",
            "uniqueKey": "BV2"
        },
        {
            "pulseOptionId": 47,
            "pulseOptionName": "Dull",
            "doshas": "Pitta",
            "uniqueKey": "BP2"
        },
        {
            "pulseOptionId": 48,
            "pulseOptionName": "Dull",
            "doshas": "Kapha",
            "uniqueKey": "BK2"
        },
        {
            "pulseOptionId": 49,
            "pulseOptionName": "pleasant",
            "doshas": "Vata",
            "uniqueKey": "BV2"
        },
        {
            "pulseOptionId": 50,
            "pulseOptionName": "Pleasant",
            "doshas": "Pitta",
            "uniqueKey": "BP2"
        },
        {
            "pulseOptionId": 51,
            "pulseOptionName": "Pleasant",
            "doshas": "Kapha",
            "uniqueKey": "BK2"
        },
        {
            "pulseOptionId": 52,
            "pulseOptionName": "Heavy",
            "doshas": "Vata",
            "uniqueKey": "BV3"
        },
        {
            "pulseOptionId": 53,
            "pulseOptionName": "Heavy",
            "doshas": "Pitta",
            "uniqueKey": "BP3"
        },
        {
            "pulseOptionId": 54,
            "pulseOptionName": "Heavy",
            "doshas": "Kapha",
            "uniqueKey": "BK3"
        },
        {
            "pulseOptionId": 55,
            "pulseOptionName": "Light",
            "doshas": "Vata",
            "uniqueKey": "BV3"
        },
        {
            "pulseOptionId": 56,
            "pulseOptionName": "Light",
            "doshas": "Pitta",
            "uniqueKey": "BP3"
        },
        {
            "pulseOptionId": 57,
            "pulseOptionName": "Light",
            "doshas": "Kapha",
            "uniqueKey": "BK3"
        },
        {
            "pulseOptionId": 58,
            "pulseOptionName": "Soft",
            "doshas": "Vata",
            "uniqueKey": "BV4"
        },
        {
            "pulseOptionId": 59,
            "pulseOptionName": "Soft",
            "doshas": "Pitta",
            "uniqueKey": "BP4"
        },
        {
            "pulseOptionId": 60,
            "pulseOptionName": "Soft",
            "doshas": "Kapha",
            "uniqueKey": "BK4"
        },
        {
            "pulseOptionId": 61,
            "pulseOptionName": "Hard",
            "doshas": "Vata",
            "uniqueKey": "BV4"
        },
        {
            "pulseOptionId": 62,
            "pulseOptionName": "Hard",
            "doshas": "Pitta",
            "uniqueKey": "BP4"
        },
        {
            "pulseOptionId": 63,
            "pulseOptionName": "Hard",
            "doshas": "Kapha",
            "uniqueKey": "BK4"
        },
        {
            "pulseOptionId": 64,
            "pulseOptionName": "Cold",
            "doshas": "Vata",
            "uniqueKey": "BV5"
        },
        {
            "pulseOptionId": 65,
            "pulseOptionName": "Cold",
            "doshas": "Pitta",
            "uniqueKey": "BP5"
        },
        {
            "pulseOptionId": 66,
            "pulseOptionName": "Cold",
            "doshas": "Kapha",
            "uniqueKey": "BK5"
        },
        {
            "pulseOptionId": 67,
            "pulseOptionName": "Warm/Hot",
            "doshas": "Vata",
            "uniqueKey": "BV5"
        },
        {
            "pulseOptionId": 68,
            "pulseOptionName": "Warm/Hot",
            "doshas": "Pitta",
            "uniqueKey": "BP5"
        },
        {
            "pulseOptionId": 69,
            "pulseOptionName": "Warm/Hot",
            "doshas": "Kapha",
            "uniqueKey": "BK5"
        },
        {
            "pulseOptionId": 70,
            "pulseOptionName": "Subtle",
            "doshas": "Vata",
            "uniqueKey": "BV6"
        },
        {
            "pulseOptionId": 71,
            "pulseOptionName": "Subtle",
            "doshas": "Pitta",
            "uniqueKey": "BP6"
        },
        {
            "pulseOptionId": 72,
            "pulseOptionName": "Subtle",
            "doshas": "Kapha",
            "uniqueKey": "BK6"
        },
        {
            "pulseOptionId": 73,
            "pulseOptionName": "Sharp",
            "doshas": "Vata",
            "uniqueKey": "BV6"
        },
        {
            "pulseOptionId": 74,
            "pulseOptionName": "Sharp",
            "doshas": "Pitta",
            "uniqueKey": "BP6"
        },
        {
            "pulseOptionId": 75,
            "pulseOptionName": "Sharp",
            "doshas": "Kapha",
            "uniqueKey": "BK6"
        },
        {
            "pulseOptionId": 76,
            "pulseOptionName": "Moving",
            "doshas": "Vata",
            "uniqueKey": "BV7"
        },
        {
            "pulseOptionId": 77,
            "pulseOptionName": "Moving",
            "doshas": "Pitta",
            "uniqueKey": "BP7"
        },
        {
            "pulseOptionId": 78,
            "pulseOptionName": "Moving",
            "doshas": "Kapha",
            "uniqueKey": "BK7"
        },
        {
            "pulseOptionId": 79,
            "pulseOptionName": "Unctuous",
            "doshas": "Vata",
            "uniqueKey": "BV8"
        },
        {
            "pulseOptionId": 80,
            "pulseOptionName": "Unctuous",
            "doshas": "Pitta",
            "uniqueKey": "BP8"
        },
        {
            "pulseOptionId": 81,
            "pulseOptionName": "Unctuous",
            "doshas": "Kapha",
            "uniqueKey": "BK8"
        },
        {
            "pulseOptionId": 82,
            "pulseOptionName": "Dry",
            "doshas": "Vata",
            "uniqueKey": "BV8"
        },
        {
            "pulseOptionId": 83,
            "pulseOptionName": "Dry",
            "doshas": "Pitta",
            "uniqueKey": "BP8"
        },
        {
            "pulseOptionId": 84,
            "pulseOptionName": "Dry",
            "doshas": "Kapha",
            "uniqueKey": "BK8"
        },
        {
            "pulseOptionId": 85,
            "pulseOptionName": "Flowing",
            "doshas": "Vata",
            "uniqueKey": "BV9"
        },
        {
            "pulseOptionId": 86,
            "pulseOptionName": "Flowing",
            "doshas": "Pitta",
            "uniqueKey": "BP9"
        },
        {
            "pulseOptionId": 87,
            "pulseOptionName": "Flowing",
            "doshas": "Kapha",
            "uniqueKey": "BK9"
        },
        {
            "pulseOptionId": 88,
            "pulseOptionName": "Excited",
            "doshas": "Vata",
            "uniqueKey": "BV10"
        },
        {
            "pulseOptionId": 89,
            "pulseOptionName": "Excited",
            "doshas": "Pitta",
            "uniqueKey": "BP10"
        },
        {
            "pulseOptionId": 90,
            "pulseOptionName": "Excited",
            "doshas": "Kapha",
            "uniqueKey": "BK10"
        }
    ]


    // Create an object to hold the filtered arrays for each dosha
    const filteredData: { [key: string]: any[] } = {
        Vata: [],
        Pitta: [],
        Kapha: [],
    };

    // Loop through the original array and distribute objects to the corresponding dosha arrays
    pulseOptionsList.forEach((option) => {
        const dosha = option.doshas;
        filteredData[dosha].push(option);
    });

    console.log("---->", filteredData)

    const groupedData: { [uniqueKey: string]: typeof pulseOptionsList } = {};

    pulseOptionsList.forEach((item) => {
        if (!groupedData[item.uniqueKey]) {
            groupedData[item.uniqueKey] = [];
        }
        groupedData[item.uniqueKey].push(item);
    });

    const filteredDatanew = Object.values(groupedData);
    // console.log(filteredDatanew)


    // filteredDatanew.map((group, index) => {

    //     group.map((item) => {
    //         console.log("item.---->" + item.pulseOptionName);
    //         {
    //             group.length > 1 && (

    //                 console.log("group.---->" + group[1])
    //             )

    //         };
    //         return null; // You need to return something from the map function
    //     });
    // })

    // console.log(filteredDatanew)

    // for (let index = 0; index < filteredDatanew.length; index++) {
    //     const group = filteredDatanew[index];
    //     for (let i = 0; i < group.length; i++) {
    //         const item = group[i];
    //         console.log("item.---->" + item.pulseOptionName);
    //         if (group.length > 1) {
    //             console.log("group.---->" + group[1].pulseOptionName);

    //         }
    //     }
    // }








    // console.log(item.pulseOptionName)
    // console.log(object)
    //   group.length > 1 && (
    //      {group[1].pulseOptionName}
    //   )




    const pulseOptionsList1111111 = [
        {
            "pulseOptionId": 91,
            "pulseOptionName": "Vata",
            "doshas": null,
            "uniqueKey": null
        },
        {
            "pulseOptionId": 92,
            "pulseOptionName": "Pitta",
            "doshas": null,
            "uniqueKey": null
        },
        {
            "pulseOptionId": 93,
            "pulseOptionName": "Kapha",
            "doshas": null,
            "uniqueKey": null
        }
    ];

    // const mappedArray = pulseOptionsList1111111.map(option => {
    //     return {
    //         pulseOptionId: option.pulseOptionId,
    //         pulseOptionName: option.pulseOptionName
    //     };
    // });

    // console.log(mappedArray);

    return (

        // <div>

        <div>
            {
                pulseOptionsList1111111.map((data: any) => (
                    <p>{data.pulseOptionName}</p>))
            }

        </div>
        //     <div className='mt-20'>
        //         <h2 className='font-semibold text-blue-600'>Filtered Data for Vata Dosha:</h2>
        //         <ul>
        //             {filteredData.Vata.map((option) => (
        //                 <li key={option.pulseOptionId} className='flex gap-1'>
        //                     <p>{option.pulseOptionId}</p>
        //                     {option.pulseOptionName}
        //                     <span>{option.uniqueKey}</span>
        //                 </li>
        //                 // <p>{option.}</p>
        //             ))}
        //         </ul>

        //     </div>
        //     <div>
        //         <h2 className='font-semibold text-blue-600'>Filtered Data for Pitta Dosha:</h2>
        //         <ul>
        //             {filteredData.Pitta.map((option) => (
        //                 <li key={option.pulseOptionId} className='flex gap-1'>
        //                     <p>{option.pulseOptionId}</p>
        //                     {option.pulseOptionName}
        //                     <span>{option.uniqueKey}</span>

        //                 </li>
        //             ))}
        //         </ul>
        //     </div>
        //     <div>
        //         <h2 className='font-semibold text-blue-600'>Filtered Data for Kapha Dosha:</h2>
        //         <ul>
        //             {filteredData.Kapha.map((option) => (
        //                 <li key={option.pulseOptionId} className='flex gap-1'><p>{option.pulseOptionId}</p>{option.pulseOptionName}</li>
        //             ))}
        //         </ul>
        //     </div>
        // </div>
        // <div className="grid grid-cols-3">
        //     {filteredDatanew.map((group, index) => (
        //         <div key={index}>
        //             {group.map((item) => (
        //                 <div key={item.pulseOptionId}>
        //                     {/* Render your data here */}
        //                     <div className="flex gap-5">
        //                         <p className="mr-2">{item.pulseOptionName}
        //                             {/* <span className='ml-5'> {item.doshas}</span> */}
        //                         </p>
        //                         {group.length > 1 && (
        //                             <p className="mr-2">{group[1].pulseOptionName}</p>
        //                         )}
        //                     </div>
        //                     {/* Add more fields as needed */}
        //                 </div>
        //             ))}
        //         </div>
        //     ))}
        // </div>



        // <div className="grid grid-cols-3">
        //     {filteredDatanew.map((group, index) => (
        //         <div key={index}>
        //             {group.map((item) => (
        //                 <div key={item.pulseOptionId}>

        //                     <div className="flex gap-5">
        //                         <p className="mr-2">{item.pulseOptionName}

        //                         </p>
        //                         {group.length > 1 && (
        //                             <p className="mr-2">{group[1].pulseOptionName}</p>
        //                         )}
        //                     </div>

        //                 </div>
        //             ))}
        //         </div>
        //     ))}
        // </div>

        // <div></div>


        // <div>
        //     {data.map((question) => (
        //         <div key={question.pulseQuestionId}>
        //             <h2 className='text-3xl bg-red-400'>{question.pulseQuestionName}</h2>
        //             <ul>
        //                 {question.pulseOptionsList.map((option) => (
        //                     <li key={option.pulseOptionId}>
        //                         {/* Render your option data here */}
        //                         {option.pulseOptionName}
        //                     </li>
        //                 ))}
        //             </ul>
        //         </div>
        //     ))}
        // </div>
        // <div>
        //     <p>
        //         {
        //             Wholeness.pulseOptionsList.map((data: any) => {
        //                 <p>{data}</p>
        //             })
        //         }
        //     </p>
        // </div>
        // <p></p>
    );
};

export default PulseQ;
