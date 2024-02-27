import React, { useState } from 'react';
import Accordion from './Accordion';

interface PulseOption {
    pulseOptionId: number;
    pulseOptionName: string;
    doshas: string;
    uniqueKey: string | null;
}

const Dhatu: React.FC = () => {
    // const pulseOptionsList: PulseOption[] = [

    // ];

    const pulseOptionsList: PulseOption[] = [
        {
            "pulseOptionId": 94,
            "pulseOptionName": "Rasa",
            "doshas": "Vata",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 95,
            "pulseOptionName": "Rasa",
            "doshas": "Pitta",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 96,
            "pulseOptionName": "Rasa",
            "doshas": "Kapha",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 97,
            "pulseOptionName": "Rakta",
            "doshas": "Vata",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 98,
            "pulseOptionName": "Rakta",
            "doshas": "Pitta",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 99,
            "pulseOptionName": "Rakta",
            "doshas": "Kapha",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 100,
            "pulseOptionName": "Mamsa",
            "doshas": "Vata",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 101,
            "pulseOptionName": "Mamsa",
            "doshas": "Pitta",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 102,
            "pulseOptionName": "Mamsa",
            "doshas": "Kapha",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 103,
            "pulseOptionName": "Medha",
            "doshas": "Vata",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 104,
            "pulseOptionName": "Medha",
            "doshas": "Pitta",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 105,
            "pulseOptionName": "Medha",
            "doshas": "Kapha",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 106,
            "pulseOptionName": "Majja",
            "doshas": "Vata",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 107,
            "pulseOptionName": "Majja",
            "doshas": "Pitta",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 108,
            "pulseOptionName": "Majja",
            "doshas": "Kapha",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 109,
            "pulseOptionName": "Asthi",
            "doshas": "Vata",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 110,
            "pulseOptionName": "Asthi",
            "doshas": "Pitta",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 111,
            "pulseOptionName": "Asthi",
            "doshas": "Kapha",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 112,
            "pulseOptionName": "Shukra",
            "doshas": "Vata",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 113,
            "pulseOptionName": "Shukra",
            "doshas": "Pitta",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 114,
            "pulseOptionName": "Shukra",
            "doshas": "Kapha",
            "uniqueKey": null
        }
    ]

    // Create an object to store the selected checkboxes
    const [selectedCheckboxes, setSelectedCheckboxes] = useState<Record<string, number[]>>({});

    // Filter unique pulseOptionNames
    const uniquePulseOptionNames = Array.from(new Set(pulseOptionsList.map((option) => option.pulseOptionName)));

    // Handle checkbox change
    const handleCheckboxChange = (pulseOptionName: string, pulseOptionId: number) => {
        // setSelectedCheckboxes((prevSelectedCheckboxes) => {
        //     // Clone the previous state to avoid mutation
        //     const updatedSelectedCheckboxes = { ...prevSelectedCheckboxes };
        //     if (!updatedSelectedCheckboxes[pulseOptionName]) {
        //         updatedSelectedCheckboxes[pulseOptionName] = [];
        //     }

        //     const index = updatedSelectedCheckboxes[pulseOptionName].indexOf(pulseOptionId);

        //     if (index === -1) {
        //         // If the pulseOptionId is not in the array, add it
        //         updatedSelectedCheckboxes[pulseOptionName].push(pulseOptionId);
        //     } else {
        //         // If the pulseOptionId is in the array, remove it
        //         updatedSelectedCheckboxes[pulseOptionName].splice(index, 1);
        //     }

        //     return updatedSelectedCheckboxes;
        // });
        console.log(pulseOptionName)
        console.log(pulseOptionId)
    };


    const [accordions, setAccordion] = useState([
        {
            key: 1,
            title: 'What is GeeksforGeeks?',
            data: `GeeksforGeeks is a one stop solution  
                      for all computer science students.`,
            isOpen: false
        },
        {
            key: 2,
            title: 'What GeeksforGeeks offer us?',
            data: `GeeksforGeeks offers Free Tutorials,  
                      Millions of Articles, Live, Online and  
                      Classroom Courses,Frequent Coding Competitions,  
                      Webinars by Industry Experts, Internship  
                      opportunities and Job Opportunities.`,
            isOpen: false
        },
        {
            key: 3,
            title: 'Which is the best portal to study Computer Science?',
            data: `GeeksforGeeks is the best Computer Science portal  
                      for geeks. It contains well written, well thought  
                      and well explained computer science and programming  
                      articles.`,
            isOpen: false
        },
    ]);

    const toggleAccordion = (accordionkey: any) => {
        const updatedAccordions = accordions.map((accord) => {
            if (accord.key === accordionkey) {
                return { ...accord, isOpen: !accord.isOpen };
            } else {
                return { ...accord, isOpen: false };
            }
        });

        setAccordion(updatedAccordions);
    };

    return (


        <>
            {/* {accordions.map((accordion) => (
                <Accordion
                    key={accordion.key}
                    title={accordion.title}
                    data={accordion.data}
                    isOpen={accordion.isOpen}
                    toggleAccordion={() => toggleAccordion(accordion.key)}
                />
            ))} */}
        </>
    );
};

export default Dhatu;
