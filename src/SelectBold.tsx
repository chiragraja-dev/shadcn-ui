import React, { useState } from 'react';

const SelectBold: React.FC = () => {
    const [questionsAndAnswers] = useState([
        {
            question: "What is your favorite color?",
            options: ["Red", "Blue"],
        },
        {
            question: "What is your favorite animal?",
            options: ["Dog", "Cat"],
        },
    ]);

    // Create a state variable to store the selected options
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleOptionSelect = (questionIndex: number, selectedOption: string) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[questionIndex] = selectedOption;
        setSelectedOptions(newSelectedOptions);
    };

    return (
        <div>
            {questionsAndAnswers.map((qa, index) => (
                <div key={index}>
                    <h3>{qa.question}</h3>
                    {qa.options.map((option, optionIndex) => (
                        <p key={optionIndex}>
                            <label>
                                <input
                                    type="radio"
                                    name={`question${index}`}
                                    value={option}
                                    checked={option === selectedOptions[index]}
                                    onChange={() => handleOptionSelect(index, option)}
                                />
                                <span style={{ fontWeight: option === selectedOptions[index] ? 'bold' : 'normal' }}>
                                    {option}
                                </span>
                            </label>
                        </p>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SelectBold;
