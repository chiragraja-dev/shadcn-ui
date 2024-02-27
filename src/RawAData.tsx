import React, { useState } from 'react';

const CheckboxList: React.FC = () => {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

    const handleCheckboxChange = (id: string) => {
        if (selectedCheckboxes.includes(id)) {
            setSelectedCheckboxes((prevSelected) =>
                prevSelected.filter((selectedId) => selectedId !== id)
            );
        } else {
            setSelectedCheckboxes((prevSelected) => [...prevSelected, id]);
        }
    };

    console.log(selectedCheckboxes)

    return (
        <div>
            <input
                type="checkbox"
                id="1"
                onChange={() => handleCheckboxChange('1')}
                checked={selectedCheckboxes.includes('1')}
            />
            <label htmlFor="1">Checkbox 1</label>

            <input
                type="checkbox"
                id="2"
                onChange={() => handleCheckboxChange('2')}
                checked={selectedCheckboxes.includes('2')}
            />
            <label htmlFor="2">Checkbox 2</label>

            <input
                type="checkbox"
                id="3"
                onChange={() => handleCheckboxChange('3')}
                checked={selectedCheckboxes.includes('3')}
            />
            <label htmlFor="3">Checkbox 3</label>

            <div>
                <p>Selected Checkboxes: {selectedCheckboxes.join(', ')}</p>
            </div>
        </div>
    );
};

export default CheckboxList;
