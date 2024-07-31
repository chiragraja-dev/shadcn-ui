import React, { useState } from 'react';

const NewPage = () => {
    // State to keep track of input fields
    const [fields, setFields] = useState([{ id: 1, name: "amount" }, { id: 2, name: "reciever Name" }, { id: 3, name: "comments" }]);

    // Function to add new fields
    const addFields = () => {
        const newFields = [
            { id: fields.length + 1, name: "amount" },
            { id: fields.length + 2, name: "reciever Name" },
            { id: fields.length + 3, name: "comments" }
        ];
        setFields([...fields, ...newFields]);
    };

    return (
        <>
            <div className='grid grid-cols-3 gap-4'>
                {fields.map((field, index) => (
                    <input key={field.id} type="text" className=' outline' />
                ))}
            </div>
            <div>
                <button onClick={addFields} className='mt-4 p-2 bg-blue-500 text-white'>
                    Add Field
                </button>
            </div>
        </>
    );
}

export default NewPage;
