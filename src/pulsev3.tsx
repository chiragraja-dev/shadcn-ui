import React, { useState } from 'react'

const Pulsev3 = () => {
    const groupedData: any = {
        "A1": [
            {
                "pulseOptionId": 1,
                "pulseOptionName": "Covered",
                "doshas": null,
                "uniqueKey": "A1"
            },
            {
                "pulseOptionId": 2,
                "pulseOptionName": "Clear",
                "doshas": null,
                "uniqueKey": "A1"
            }
        ],
        "A2": [
            {
                "pulseOptionId": 3,
                "pulseOptionName": "Dull",
                "doshas": null,
                "uniqueKey": "A2"
            },
            {
                "pulseOptionId": 4,
                "pulseOptionName": "Pleasant",
                "doshas": null,
                "uniqueKey": "A2"
            }
        ],
        "A3": [
            {
                "pulseOptionId": 5,
                "pulseOptionName": "Heavy",
                "doshas": null,
                "uniqueKey": "A3"
            },
            {
                "pulseOptionId": 6,
                "pulseOptionName": "Light",
                "doshas": null,
                "uniqueKey": "A3"
            }
        ],
        "A4": [
            {
                "pulseOptionId": 7,
                "pulseOptionName": "Soft",
                "doshas": null,
                "uniqueKey": "A4"
            },
            {
                "pulseOptionId": 8,
                "pulseOptionName": "Hard",
                "doshas": null,
                "uniqueKey": "A4"
            }
        ],
        "A5": [
            {
                "pulseOptionId": 9,
                "pulseOptionName": "Cold",
                "doshas": null,
                "uniqueKey": "A5"
            },
            {
                "pulseOptionId": 10,
                "pulseOptionName": "Warm/Hot",
                "doshas": null,
                "uniqueKey": "A5"
            }
        ],
        "A6": [
            {
                "pulseOptionId": 11,
                "pulseOptionName": "Subtle",
                "doshas": null,
                "uniqueKey": "A6"
            },
            {
                "pulseOptionId": 12,
                "pulseOptionName": "Sharp",
                "doshas": null,
                "uniqueKey": "A6"
            }
        ],
        "A7": [
            {
                "pulseOptionId": 13,
                "pulseOptionName": "Moving",
                "doshas": null,
                "uniqueKey": "A7"
            }
        ],
        "A8": [
            {
                "pulseOptionId": 14,
                "pulseOptionName": "Unctuous",
                "doshas": null,
                "uniqueKey": "A8"
            },
            {
                "pulseOptionId": 15,
                "pulseOptionName": "Dry",
                "doshas": null,
                "uniqueKey": "A8"
            }
        ],
        "A9": [
            {
                "pulseOptionId": 16,
                "pulseOptionName": "Flowing",
                "doshas": null,
                "uniqueKey": "A9"
            }
        ],
        "A10": [
            {
                "pulseOptionId": 17,
                "pulseOptionName": "Excited",
                "doshas": null,
                "uniqueKey": "A10"
            }
        ]
    }



    const [wholenessAns, setWholenessAns] = useState<number[]>([11,
        13,
        14,
        16]);

    const handleRadioChange = (optionId: number, uniqueKey: string) => {
        setWholenessAns((prevWholenessAns: any) => {
            const newWholenessAns = [...prevWholenessAns];
            const existingIndex = newWholenessAns.indexOf(optionId);

            if (existingIndex !== -1) {
                // If the option is already in the array, remove it
                newWholenessAns.splice(existingIndex, 1);
            } else {
                // If the option is not in the array, add it
                newWholenessAns.push(optionId);
            }

            return newWholenessAns;
        });
    };
    const articleContext = "**Abstract**\n\nAyurveda is considered as one of the oldest of the traditional systems of medicine (TSMs) accepted worldwide. The ancient wisdom in this traditional system of medicine is still not exhaustively explored. The junction of the rich knowledge from different traditional systems of medicine can lead to new avenues in herbal drug discovery process. The lack of the understanding of the differences and similarities between the theoretical doctrines of these systems is the major hurdle towards their convergence apart from the other impediments in the discovery of plant based medicines. This review aims to bring into limelight the age old history and the basic principles of Ayurveda. This would help the budding scholars, researchers and practitioners gain deeper perspicuity of traditional systems of medicine, facilitate strengthening of the commonalities and overcome the challenges towards their global acceptance and harmonization of such medicinal systems.\n\n\n**Graphical abstract :** \n![image](https://cms.azure.styava.dev/api/assets/ojastattva/2423b281-c9e8-4168-b67b-e54d57534539/image.png 'image')\n\n\n** Keywords: **Ayurveda, Naturopathy, Unani, Siddha, Homeopathy\n\n**1.\u2003Introduction**\n\nAyurveda is one of the most renowned traditional systems of medicine that has survived and flourished from ages till date. With the enormous knowledge of nature based medicine, the relationship of human body constitution and function to nature and the elements of the universe that act in coordination and affect the living beings, this system will continue to flourish in ages still to come. There are many avenues still to be explored by the researchers, practitioners and experts in the field who carry the responsibility of keeping the traditional systems of medicine (TSMs) alive and contributing to their growth in the future. However, due to many barriers such as lack of literature sources in different languages and insufficiency of awareness about the basic principles and histories of the systems from different ethnic origins, there is a lacuna of exchange of information from systems around the globe. Knowledge of systems from different ethnic origins would bring about interchange of knowledge and increase the understanding of different systems, and this can ultimately contribute to integration and advancement of herbal drug research when accompanied by collaborative work of researchers from different countries. These futuristic goals can be accomplished when one gains insights about the systems, the principles and histories and works upon the strengthening aspects common between the various TSMs. In this review, we have made an attempt to put forth the basic principles of doctrine and history of Ayurveda to contribute to the above said perspectives.\n\nTo date, there have been several reviews detailing Ayurveda. However, very few reviews detail the modalities of the basic principles and history of Ayurveda.1 Through this review the authors wish to provide the readers an understanding of the age old history and the basic principles of Ayurveda.\n\n\n**2.\u2003History of Ayurveda**\nAyurveda has an age old history since the 2nd Century BC. Ayurveda has its foundations laid by the ancient schools of Hindu Philosophical teachings named Vaisheshika and the school of logic named as Nyaya. It is also related to the manifestation framework, well-known as Samkhya, and it was established in the same period when schools of Nyaya and Vaisheshika flourished.\n\nThe Vaisheshika School preached about inferences and perceptions that should be obtained about a patient's pathological condition for treatment. Whereas, Nyaya school propagated its teachings on the basis that one should have an extensive knowledge of the patient's condition, and the disease condition before proceeding for treatment. The school of Vaisheshika, classifies the attributes of any object into six types: substance, particularity, activity, generality, inherence and quality called as Dravya, Vishesha, Karma, Samanya, Samavaya and Guna respectively, in Sanskrit language.2, 3 Later, Vaisheshika and Nyaya schools worked together and jointly founded the nyāya–vaiśeṣika school. The nyāya–vaiśeṣika school, in the later years brought glory to the ancient knowledge and helped in disseminating the knowledge about Ayurveda. Even before these schools were established and also today, the origin of Ayurveda is considered to be divine, from the Hindu God, Brahma who is called as the creator of the universe.4, 5 It is believed that the creator of the universe passed on this holistic knowledge of healing onto the sages for the well-being of mankind. From the sages the knowledge of traditional medicines was passed on to the disciples and then to the common man by various writings and oral narrations. The information about the healing properties of the herbs was composed in the form of poems, called “Shlokas”. These were used by sages to describe the use of medicinal plants. The Hindu system of healing is believed to be based on four eminent compilations of knowledge (Vedas) called as Yajur Veda, Rig Veda, Sam Veda, and Atharva Veda. The Rig Veda is the most well-known of all the four Vedas and describes 67 plants and 1028 Shlokas. The Atharva Veda and Yajur Veda describe 293 and 81 medicinally useful plants. The practice of Ayurveda is based upon the knowledge gained from these Vedas. The writings in Rig Veda and Atharva Veda are attributed to “Atreya” who is believed to have been conferred with this knowledge from Lord Indra, who initially received it from Lord Brahma.6, 7 Agnivesha compiled the knowledge from the Vedas, and it was edited by Charaka and some other scholars and is presently called as “Charaka Samhita”. Charaka Samhita describes all aspects of Ayurvedic medicine and Sushruta Samhita describes the Science of Surgery.8, 9, 10, 11 Both these legendary compilations are still used by practitioners of traditional medicine. These ancient texts are available in various translations and languages like Tibetan, Greek, Chinese, Arabic and Persian.12 There are several other allied minor compilations like Nighantu Granthas, Madhava Nidana and Bhava Prakasha from the contributions of various scholars, however Charaka Samhita is the most respected of all the records.\n";

    return (
        <div>

            <div className=' grid grid-cols-5 gap-6 mt-10'>
                {Object.keys(groupedData).map(key => (
                    <div key={key} className='bg-white rounded-md p-5 gap-4 shadow-xl'>

                        <div className='gap-2 grid justify-center items-center font-medium '>
                            {groupedData[key].map((option: any) => (
                                <div className='flex items-center mr-4 text-headingTextColor '>
                                    <input
                                        id={`${option.uniqueKey}_${option.pulseOptionId}`}
                                        type="radio"
                                        value={option.pulseOptionId}
                                        name={option.uniqueKey}
                                        style={{ pointerEvents: 'auto' }}
                                        defaultChecked={wholenessAns.includes(option.pulseOptionId)}
                                        onChange={() => handleRadioChange(option.pulseOptionId, option.uniqueKey)}
                                        className="w-4 h-4  accent-brown2 "
                                    />

                                    <label className={`ml-2 lg:text-sm 2xl:text-lg `} key={option.pulseOptionId} htmlFor={option.pulseOptionName}>{option.pulseOptionId}{option.pulseOptionName}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div dangerouslySetInnerHTML={{ __html: articleContext }}></div>
        </div>
    )
}

export default Pulsev3