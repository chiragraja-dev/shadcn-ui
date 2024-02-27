import React, { useState } from "react";

function App() {
    const initialSourceArray: number[] = [1, 10, 5, 9, 21];
    const [sourceArray, setSourceArray] = useState<number[]>(initialSourceArray);
    const [targetArray, setTargetArray] = useState<number[]>([]);

    const handleCheckboxChange = (value: number) => {
        const sourceIndex = sourceArray.indexOf(value);
        if (sourceIndex !== -1) {
            // Remove the element from the source array
            const updatedSourceArray = [...sourceArray];
            updatedSourceArray.splice(sourceIndex, 1);

            // Add the element to the target array
            const updatedTargetArray = [...targetArray, value];

            setSourceArray(updatedSourceArray);
            setTargetArray(updatedTargetArray);
        } else {
            // The checkbox is unchecked, so move the element back to the source array
            const targetIndex = targetArray.indexOf(value);
            if (targetIndex !== -1) {
                // Remove the element from the target array
                const updatedTargetArray = [...targetArray];
                updatedTargetArray.splice(targetIndex, 1);

                // Add the element to the source array
                const updatedSourceArray = [...sourceArray, value];

                setSourceArray(updatedSourceArray);
                setTargetArray(updatedTargetArray);
            }
        }
    };

    return (
        <div>
            <div className="source-container">
                {sourceArray.map((data) => (
                    <div key={data} className="flex">
                        <input
                            type="checkbox"
                            value={data}
                            checked={targetArray.includes(data)}
                            onChange={() => handleCheckboxChange(data)}
                        />
                        <div>{data}</div>
                    </div>
                ))}
            </div>
            <div className="target-container">
                <h3>Target Array:</h3>
                {targetArray.map((data) => (
                    <div key={data} className="flex">
                        <input
                            type="checkbox"
                            value={data}
                            checked={sourceArray.includes(data)}
                            onChange={() => handleCheckboxChange(data)}
                        />
                        <div>{data}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
