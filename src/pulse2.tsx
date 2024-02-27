import React from 'react';

interface PulseOption {
    pulseOptionId: number;
    pulseOptionName: string;
    doshas: any; // You can replace 'any' with the actual type
    key: string;
}

interface PulseQuestion {
    pulseQuestionId: number;
    pulseQuestionName: string;
    pulseOptionsList: PulseOption[];
}

const data: PulseQuestion[] = [
    {
        pulseQuestionId: 1,
        pulseQuestionName: 'Wholeness',
        pulseOptionsList: [
            { pulseOptionId: 1, pulseOptionName: 'Covered', doshas: null, key: 'A1' },
            { pulseOptionId: 2, pulseOptionName: 'Clear', doshas: null, key: 'A1' },
            { pulseOptionId: 3, pulseOptionName: 'Dull', doshas: null, key: 'A2' },
            { pulseOptionId: 4, pulseOptionName: 'Pleasant', doshas: null, key: 'A2' },
            { pulseOptionId: 5, pulseOptionName: 'Heavy', doshas: null, key: 'A3' },
            { pulseOptionId: 6, pulseOptionName: 'Light', doshas: null, key: 'A3' },
            { pulseOptionId: 7, pulseOptionName: 'Soft', doshas: null, key: 'A4' },
            { pulseOptionId: 8, pulseOptionName: 'Hard', doshas: null, key: 'A4' },
            { pulseOptionId: 9, pulseOptionName: 'Cold', doshas: null, key: 'A5' },
            { pulseOptionId: 10, pulseOptionName: 'Warm/Hot', doshas: null, key: 'A5' },
        ],
    },
];

const GroupedData: React.FC = () => {
    const Wholeness: { [key: string]: PulseOption[] } = {};

    // Group the data by the 'key' field
    data[0].pulseOptionsList.forEach((item) => {
        const key = item.key;
        if (!Wholeness[key]) {
            Wholeness[key] = [];
        }
        Wholeness[key].push(item);
    });

    return (
        <div className='grid grid-cols-5'>
            {Object.keys(Wholeness).map((key) => (
                <div key={key} >
                    <div>
                        <h2>Items with key '{key}':</h2>
                        {Wholeness[key].map((item) => (
                            <div key={item.pulseOptionId}>
                                <p>{item.pulseOptionName}</p>
                                {/* Render other item properties as needed */}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GroupedData;
