import React, { ChangeEvent, useState } from 'react';

const HeightInput: React.FC = () => {
  const [height, setHeight] = useState<string>('');

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;


    // Validate the input using a regular expression
    if (/^\d*'?\d*"?$/.test(value) && value.length <= 5) {
      setHeight(value);
    }
  };

  const parseHeight = () => {
    // Split the height string into feet and inches
    const [feetPart, inchesPart] = height.split("'");

    // Convert feet and inches to numbers (or use 0 if they are not provided)
    const feet = feetPart ? parseInt(feetPart, 10) : 0;
    const inches = inchesPart ? parseInt(inchesPart, 10) : 0;

    return { feet, inches };
  };


  const [decimalValue, setDecimalValue] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Use a regular expression to allow only valid decimal numbers
    const regex = /^-?\d*\.?\d*$/;
    const inputValue = e.target.value;

    if (regex.test(inputValue) || inputValue === '') {
      setDecimalValue(inputValue);
    }
  };

  return (
    <div>
      <label>
        Height:
        <input
          type="text"
          value={height}
          onChange={handleHeightChange}
          placeholder="e.g., 5'8"
        />
      </label>
      <p>
        Height: {parseHeight().feet} feet {parseHeight().inches} inches
      </p>



      <br />
      <br />
      <br />


    </div>
  );
};

export default HeightInput;
