import React, { useState } from 'react'

const Accordion = () => {
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
                      Classroom Courses, Frequent Coding Competitions,  
                      Webinars by Industry Experts, Internship  
                      opportunities and Job Opportunities.`,
            isOpen: false
        },
        {
            key: 3,
            title: 'Which is the best portal to study Computer Science?',
            data: `GeeksforGeeks is the best Computer Science portal  
                      for geeks. It contains well-written, well-thought  
                      and well-explained computer science and programming  
                      articles.`,
            isOpen: false
        },
    ]);

    const toggleAccordion = (accordionKey: any) => {
        const updatedAccordions = accordions.map((accord) => {
            if (accord.key === accordionKey) {
                return { ...accord, isOpen: !accord.isOpen };
            } else {
                return { ...accord, isOpen: false };
            }
        });

        setAccordion(updatedAccordions);
    };

    return (
        <>
            {accordions.map((accordion: any) => (
                <div className="border rounded-md mb-1" key={accordion.key}>
                    <button
                        className="w-full p-4 text-left bg-gray-200 
                            hover:bg-gray-300 transition duration-300"
                        onClick={() => toggleAccordion(accordion.key)}
                    >
                        {accordion.title}
                        <span className={`float-right transform ${accordion.isOpen ?
                            'rotate-180' : 'rotate-0'} 
                            transition-transform duration-300`}>
                            {accordion.isOpen ? '▲' : '▼'}
                        </span>
                    </button>
                    {accordion.isOpen && (
                        <div className="p-4 bg-white">
                            {accordion.data}
                        </div>
                    )}
                </div>
            ))}
        </>
    );
}

export default Accordion
