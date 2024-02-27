// ParentComponent.tsx
import React, { useState } from 'react';
import ChildComponent from './components/childComponent';


const ParentComponent: React.FC = () => {
    const [receivedData, setReceivedData] = useState<string | null>(null);

    console.log(receivedData)
    const handleReceiveData = (data: string) => {
        setReceivedData(data); // Update the received data in the parent component's state
    };

    return (
        <div>
            <h2>Parent Component</h2>
            <ChildComponent sendData={handleReceiveData} />
            {receivedData && <p className=' font-bold text-3xl text-blue-300'>Received Data: {receivedData}</p>}
        </div>
    );
};

export default ParentComponent;
