
import React, { useState, useRef } from 'react';

const PlayVideo = () => {

    const [amaSurface, setAmaSurface] = useState<any>({
        "wholenessList": {
            "A1": 116,
            "B1": 117,
            "C1": 120,
            "D1": 121,
            "E1": 124,
            "F1": 126,
            "G1": 127,
            "H1": 130,
            "I1": 131,
            "J1": 134,
            "L1": 136,
            "K1": 135
        },

    })


    const groupedData: any = {
        "A1": [
            {
                "pulseOptionId": 115,
                "pulseOptionName": "Sticky",
                "doshas": null,
                "uniqueKey": "A1"
            },
            {
                "pulseOptionId": 116,
                "pulseOptionName": "Clear",
                "doshas": null,
                "uniqueKey": "A1"
            }
        ],
        "B1": [
            {
                "pulseOptionId": 117,
                "pulseOptionName": "Dull",
                "doshas": null,
                "uniqueKey": "B1"
            },
            {
                "pulseOptionId": 118,
                "pulseOptionName": "Sharp",
                "doshas": null,
                "uniqueKey": "B1"
            }
        ],
        "C1": [
            {
                "pulseOptionId": 119,
                "pulseOptionName": "Heavy",
                "doshas": null,
                "uniqueKey": "C1"
            },
            {
                "pulseOptionId": 120,
                "pulseOptionName": "Light",
                "doshas": null,
                "uniqueKey": "C1"
            }
        ],
        "D1": [
            {
                "pulseOptionId": 121,
                "pulseOptionName": "Soft",
                "doshas": null,
                "uniqueKey": "D1"
            },
            {
                "pulseOptionId": 122,
                "pulseOptionName": "Hard",
                "doshas": null,
                "uniqueKey": "D1"
            }
        ],
        "E1": [
            {
                "pulseOptionId": 123,
                "pulseOptionName": "Cold",
                "doshas": null,
                "uniqueKey": "E1"
            },
            {
                "pulseOptionId": 124,
                "pulseOptionName": "Hot",
                "doshas": null,
                "uniqueKey": "E1"
            }
        ],
        "F1": [
            {
                "pulseOptionId": 125,
                "pulseOptionName": "Subtle",
                "doshas": null,
                "uniqueKey": "F1"
            },
            {
                "pulseOptionId": 126,
                "pulseOptionName": "Gross",
                "doshas": null,
                "uniqueKey": "F1"
            }
        ],
        "G1": [
            {
                "pulseOptionId": 127,
                "pulseOptionName": "Moving",
                "doshas": null,
                "uniqueKey": "G1"
            },
            {
                "pulseOptionId": 128,
                "pulseOptionName": "Stable",
                "doshas": null,
                "uniqueKey": "G1"
            }
        ],
        "H1": [
            {
                "pulseOptionId": 129,
                "pulseOptionName": "Slightly Oily",
                "doshas": null,
                "uniqueKey": "H1"
            },
            {
                "pulseOptionId": 130,
                "pulseOptionName": "Dry",
                "doshas": null,
                "uniqueKey": "H1"
            }
        ],
        "I1": [
            {
                "pulseOptionId": 131,
                "pulseOptionName": "Flowing",
                "doshas": null,
                "uniqueKey": "I1"
            },
            {
                "pulseOptionId": 132,
                "pulseOptionName": "Dense",
                "doshas": null,
                "uniqueKey": "I1"
            }
        ],
        "J1": [
            {
                "pulseOptionId": 133,
                "pulseOptionName": "Smooth",
                "doshas": null,
                "uniqueKey": "J1"
            },
            {
                "pulseOptionId": 134,
                "pulseOptionName": "Rough",
                "doshas": null,
                "uniqueKey": "J1"
            }
        ],
        "K1": [
            {
                "pulseOptionId": 135,
                "pulseOptionName": "Covered",
                "doshas": null,
                "uniqueKey": "K1"
            }
        ],
        "L1": [
            {
                "pulseOptionId": 136,
                "pulseOptionName": "Pleasant",
                "doshas": null,
                "uniqueKey": "L1"
            }
        ]
    }

    console.log(amaSurface)

    const AmaSurfaceAnsList = (questionId: string, optionId: string, uniqueKey: string, checked: boolean) => {
        setAmaSurface((prevData: any) => {
            const updatedData = { ...prevData };
            const key = questionId === "1" ? "wholenessList" : questionId === "3" ? "surfaceList" : questionId === "5" ? "subDoshaList" : questionId;

            if (!updatedData[key]) {
                updatedData[key] = {};
            }

            if (checked === false) {
                delete updatedData[key][uniqueKey];
            } else {
                updatedData[key] = {
                    ...updatedData[key],
                    [uniqueKey]: parseInt(optionId, 10),
                };
            }

            return updatedData;
        });
    };

    const handleOptionChange = (ques: any, uniqueKey: string, pulseOptionId: { toString: () => string; }, check: any) => {
        if (ques == '1') {
            AmaSurfaceAnsList("1", pulseOptionId.toString(), uniqueKey, check);
        }
        else if (ques == '3') {
            console.log("hello")
            AmaSurfaceAnsList("3", pulseOptionId.toString(), uniqueKey, check);
        }
    };
    const ClearData = () => {
        setAmaSurface((prevState: any) => ({
            ...prevState, // Keep other properties
            wholenessList: {},
        }));
    };

    console.log(amaSurface)
    return (
        <div className=' grid grid-cols-5 gap-6 mt-10'>
            <button className='bg-red-400 rounded-md text-white p-2' onClick={() => ClearData()}>clear</button>
            {Object.keys(groupedData).map((key, index) => (
                <div key={index} className='bg-white rounded-md p-5 gap-4 shadow-xl'>

                    <div className='gap-2 grid justify-center items-center font-medium '>
                        {groupedData[key].map((option: any, index: any) => (

                            <div className='flex items-center mr-4 text-headingTextColor ' key={index}>
                                <input
                                    id={option.pulseOptionName}
                                    type={groupedData[key].length === 1 ? 'checkbox' : 'radio'}
                                    value={option.pulseOptionId}
                                    name={option.uniqueKey}
                                    style={{ pointerEvents: 'auto' }}
                                    checked={amaSurface.wholenessList && amaSurface?.wholenessList[option.uniqueKey] == option?.pulseOptionId}
                                    onChange={(e: any) => {
                                        //AmaSurfaceAnsList('1', e?.target?.value, option.uniqueKey, e.target.checked);
                                        handleOptionChange('1', option.uniqueKey, option.pulseOptionId, e.target.checked)
                                    }}
                                    className="w-4 h-4  accent-brown2 " />

                                <label className={`ml-2 lg:text-sm 2xl:text-lg `} key={option.pulseOptionId} htmlFor={option.pulseOptionName}>

                                    {option.pulseOptionName}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PlayVideo