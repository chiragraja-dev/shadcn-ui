import React from 'react';

const PulseSend: React.FC = () => {

    const myObject: any = {
        1: {
            name: "rohan",
            class: "8th",
        },
        2: {
            name: "abhi",
            class: "10th",
        },
    };

    for (const key in myObject) {
        // console.log(`${key}: ${JSON.stringify(myObject[key])}`);
        const abc = (`${key}: ${JSON.stringify(myObject[key])}`)
        console.log(abc)
    }


    return <div>


    </div>;
};

export default PulseSend;




