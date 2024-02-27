// ChildComponent.tsx
import React, { useState } from 'react';

interface ChildProps {
    sendData: (data: any) => void; // Callback function to send data
}

const ChildComponent: React.FC<ChildProps> = ({ sendData }) => {
    const [inputData, setInputData] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputData(e.target.value);
    };

    const handleSendData = () => {
        sendData(inputData); // Call the callback function with the data
    };

    return (
        <div>
            <input
                type="text"
                value={inputData}
                onChange={handleInputChange}
                placeholder="Enter data"
            />
            <button onClick={handleSendData}>Send Data</button>
        </div>
    );
};

export default ChildComponent;
