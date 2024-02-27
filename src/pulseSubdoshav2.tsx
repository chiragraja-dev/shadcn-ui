import React from 'react'

const PulseSubdoshav2 = () => {

    const pulseOptionsList = [
        {
            "pulseOptionId": 18,
            "pulseOptionName": "Prana",
            "doshas": "Vata",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 19,
            "pulseOptionName": "Udana",
            "doshas": "Vata",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 20,
            "pulseOptionName": "Samana",
            "doshas": "Vata",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 21,
            "pulseOptionName": "Apana",
            "doshas": "Vata",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 22,
            "pulseOptionName": "Vyana",
            "doshas": "Vata",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 23,
            "pulseOptionName": "Pachaka",
            "doshas": "Pitta",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 24,
            "pulseOptionName": "Ranjaka",
            "doshas": "Pitta",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 25,
            "pulseOptionName": "Sadhaka",
            "doshas": "Pitta",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 26,
            "pulseOptionName": "Alochaka",
            "doshas": "Pitta",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 27,
            "pulseOptionName": "Brajaka",
            "doshas": "Pitta",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 28,
            "pulseOptionName": "kledaka",
            "doshas": "Kapha",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 29,
            "pulseOptionName": "Avalambaka",
            "doshas": "Kapha",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 30,
            "pulseOptionName": "Bhodaka",
            "doshas": "Kapha",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 31,
            "pulseOptionName": "Tarpaka",
            "doshas": "Kapha",
            "uniqueKey": null
        },
        {
            "pulseOptionId": 32,
            "pulseOptionName": "Sleshaka",
            "doshas": "Kapha",
            "uniqueKey": null
        }
    ]

    const vataArray = pulseOptionsList.filter(option => option.doshas === "Vata");
    const pittaArray = pulseOptionsList.filter(option => option.doshas === "Pitta");
    const kaphaArray = pulseOptionsList.filter(option => option.doshas === "Kapha");

    console.log("Vata Array:", vataArray);
    console.log("Pitta Array:", pittaArray);
    console.log("Kapha Array:", kaphaArray);
    return (
        <div>P</div>
    )
}

export default PulseSubdoshav2