import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
    const [modifiedData, setModifiedData] = useState<any[]>([]);


    const data1 = [
        {
            "dhQuestionId": "1b289ccb-c9a3-4908-4f02-08dbc0ec3640",
            "dhQuestionName": "How Is Your Hunger",
            "dhOptions": [
                {
                    "dhOptionId": "6cecdec1-8af5-4879-983b-08dbc0f1ca73",
                    "dhOptionName": "Irregular, Varies"
                },
                {
                    "dhOptionId": "5c8ec98e-a181-4038-983c-08dbc0f1ca73",
                    "dhOptionName": "Strong, Cannot Skip Meals"
                },
                {
                    "dhOptionId": "dce842c3-0de0-487a-983d-08dbc0f1ca73",
                    "dhOptionName": "Mild, Can Skip Meals"
                }
            ]
        },
        {
            "dhQuestionId": "8f1fffd8-f6bc-4540-4f03-08dbc0ec3640",
            "dhQuestionName": "Food Capacity",
            "dhOptions": [
                {
                    "dhOptionId": "a759d4c9-4c4e-40fd-983e-08dbc0f1ca73",
                    "dhOptionName": "Variable"
                },
                {
                    "dhOptionId": "4998ff7d-29a9-4315-983f-08dbc0f1ca73",
                    "dhOptionName": "Large"
                },
                {
                    "dhOptionId": "6f8d5fb5-f02a-4c95-9840-08dbc0f1ca73",
                    "dhOptionName": "Small"
                }
            ]
        },
        {
            "dhQuestionId": "33ed16e2-df65-4772-4f04-08dbc0ec3640",
            "dhQuestionName": "After Eating, How Long Does It Take To Feel Hungry",
            "dhOptions": [
                {
                    "dhOptionId": "87bc0ea8-2e2b-4cc4-9841-08dbc0f1ca73",
                    "dhOptionName": "Varies"
                },
                {
                    "dhOptionId": "d5f2e80c-c319-4ea4-9842-08dbc0f1ca73",
                    "dhOptionName": "Within Two- Three Hours, Hungry Sooner"
                },
                {
                    "dhOptionId": "8e1b8eb1-d0dc-401d-9843-08dbc0f1ca73",
                    "dhOptionName": "Not Hungry, Takes 5-6 Hours"
                }
            ]
        },
        {
            "dhQuestionId": "0ac9048b-b81b-4ba2-4f05-08dbc0ec3640",
            "dhQuestionName": "Fluctuations Of body Weight",
            "dhOptions": [
                {
                    "dhOptionId": "427912f9-6136-45be-9844-08dbc0f1ca73",
                    "dhOptionName": "Easy To Lose, Difficult To Gain - Underweight"
                },
                {
                    "dhOptionId": "86ad5b6e-daff-4fed-9845-08dbc0f1ca73",
                    "dhOptionName": "Can Mantain Normal Weight Even With Large Food Intake"
                },
                {
                    "dhOptionId": "dcda708e-0b13-41d1-9846-08dbc0f1ca73",
                    "dhOptionName": "Gains Easily Weight"
                }
            ]
        },
        {
            "dhQuestionId": "05d24729-106f-423e-4f06-08dbc0ec3640",
            "dhQuestionName": "Energy Level",
            "dhOptions": [
                {
                    "dhOptionId": "61a3406c-398d-4699-9847-08dbc0f1ca73",
                    "dhOptionName": "Variable Or Low Compared To Others"
                },
                {
                    "dhOptionId": "2e7366b9-6e37-46a2-9848-08dbc0f1ca73",
                    "dhOptionName": "Abundant Compared To Others - High"
                },
                {
                    "dhOptionId": "2a8529c6-3d11-4d18-9849-08dbc0f1ca73",
                    "dhOptionName": "Good , May Tend Towards Laziness"
                }
            ]
        },
        {
            "dhQuestionId": "74800caf-51c5-4c7f-4f07-08dbc0ec3640",
            "dhQuestionName": "Bowel Movement",
            "dhOptions": [
                {
                    "dhOptionId": "b25a0cc8-e530-4e09-984a-08dbc0f1ca73",
                    "dhOptionName": "Irregular- Tending Towards Constipation"
                },
                {
                    "dhOptionId": "0437d39a-857e-4954-984b-08dbc0f1ca73",
                    "dhOptionName": "Frequent - More Than 1-2 Times A Day"
                },
                {
                    "dhOptionId": "1cdda8f6-cf9d-423a-984c-08dbc0f1ca73",
                    "dhOptionName": "Regular, Once Or Twice"
                }
            ]
        }
    ]

    const data2 =
    {
        "dhScore": 7,
        "finalDHResult": "Vishma agani",
        "answerGroupDTOs": [
            {
                "questionId": "1b289ccb-c9a3-4908-4f02-08dbc0ec3640",
                "questionName": "How Is Your Hunger",
                "optionId": "6cecdec1-8af5-4879-983b-08dbc0f1ca73",
                "optionName": "Irregular, Varies"
            },
            {
                "questionId": "1b289ccb-c9a3-4908-4f02-08dbc0ec3640",
                "questionName": "How Is Your Hunger",
                "optionId": "5c8ec98e-a181-4038-983c-08dbc0f1ca73",
                "optionName": "Strong, Cannot Skip Meals"
            },
            {
                "questionId": "8f1fffd8-f6bc-4540-4f03-08dbc0ec3640",
                "questionName": "Food Capacity",
                "optionId": "a759d4c9-4c4e-40fd-983e-08dbc0f1ca73",
                "optionName": "Variable"
            },
            {
                "questionId": "33ed16e2-df65-4772-4f04-08dbc0ec3640",
                "questionName": "After Eating, How Long Does It Take To Feel Hungry",
                "optionId": "d5f2e80c-c319-4ea4-9842-08dbc0f1ca73",
                "optionName": "Within Two- Three Hours, Hungry Sooner"
            },
            {
                "questionId": "0ac9048b-b81b-4ba2-4f05-08dbc0ec3640",
                "questionName": "Fluctuations Of body Weight",
                "optionId": "427912f9-6136-45be-9844-08dbc0f1ca73",
                "optionName": "Easy To Lose, Difficult To Gain - Underweight"
            },
            {
                "questionId": "88912327-4ef0-4b68-4f08-08dbc0ec3640",
                "questionName": "Quality Of Stool",
                "optionId": "f03078d9-0813-41ab-984d-08dbc0f1ca73",
                "optionName": "Hard, Dry"
            },
            {
                "questionId": "98eb925d-b709-4f2c-4f09-08dbc0ec3640",
                "questionName": "Symptoms",
                "optionId": "556bef9f-9c98-4506-9850-08dbc0f1ca73",
                "optionName": "Gas, Bloating"
            }
        ]
    }

    useEffect(() => {
        const data1 = [
            {
                "dhQuestionId": "1b289ccb-c9a3-4908-4f02-08dbc0ec3640",
                "dhQuestionName": "How Is Your Hunger",
                "dhOptions": [
                    {
                        "dhOptionId": "6cecdec1-8af5-4879-983b-08dbc0f1ca73",
                        "dhOptionName": "Irregular, Varies"
                    },
                    {
                        "dhOptionId": "5c8ec98e-a181-4038-983c-08dbc0f1ca73",
                        "dhOptionName": "Strong, Cannot Skip Meals"
                    },
                    {
                        "dhOptionId": "dce842c3-0de0-487a-983d-08dbc0f1ca73",
                        "dhOptionName": "Mild, Can Skip Meals"
                    }
                ]
            },
            {
                "dhQuestionId": "8f1fffd8-f6bc-4540-4f03-08dbc0ec3640",
                "dhQuestionName": "Food Capacity",
                "dhOptions": [
                    {
                        "dhOptionId": "a759d4c9-4c4e-40fd-983e-08dbc0f1ca73",
                        "dhOptionName": "Variable"
                    },
                    {
                        "dhOptionId": "4998ff7d-29a9-4315-983f-08dbc0f1ca73",
                        "dhOptionName": "Large"
                    },
                    {
                        "dhOptionId": "6f8d5fb5-f02a-4c95-9840-08dbc0f1ca73",
                        "dhOptionName": "Small"
                    }
                ]
            },
            {
                "dhQuestionId": "33ed16e2-df65-4772-4f04-08dbc0ec3640",
                "dhQuestionName": "After Eating, How Long Does It Take To Feel Hungry",
                "dhOptions": [
                    {
                        "dhOptionId": "87bc0ea8-2e2b-4cc4-9841-08dbc0f1ca73",
                        "dhOptionName": "Varies"
                    },
                    {
                        "dhOptionId": "d5f2e80c-c319-4ea4-9842-08dbc0f1ca73",
                        "dhOptionName": "Within Two- Three Hours, Hungry Sooner"
                    },
                    {
                        "dhOptionId": "8e1b8eb1-d0dc-401d-9843-08dbc0f1ca73",
                        "dhOptionName": "Not Hungry, Takes 5-6 Hours"
                    }
                ]
            },
            {
                "dhQuestionId": "0ac9048b-b81b-4ba2-4f05-08dbc0ec3640",
                "dhQuestionName": "Fluctuations Of body Weight",
                "dhOptions": [
                    {
                        "dhOptionId": "427912f9-6136-45be-9844-08dbc0f1ca73",
                        "dhOptionName": "Easy To Lose, Difficult To Gain - Underweight"
                    },
                    {
                        "dhOptionId": "86ad5b6e-daff-4fed-9845-08dbc0f1ca73",
                        "dhOptionName": "Can Mantain Normal Weight Even With Large Food Intake"
                    },
                    {
                        "dhOptionId": "dcda708e-0b13-41d1-9846-08dbc0f1ca73",
                        "dhOptionName": "Gains Easily Weight"
                    }
                ]
            },
            {
                "dhQuestionId": "05d24729-106f-423e-4f06-08dbc0ec3640",
                "dhQuestionName": "Energy Level",
                "dhOptions": [
                    {
                        "dhOptionId": "61a3406c-398d-4699-9847-08dbc0f1ca73",
                        "dhOptionName": "Variable Or Low Compared To Others"
                    },
                    {
                        "dhOptionId": "2e7366b9-6e37-46a2-9848-08dbc0f1ca73",
                        "dhOptionName": "Abundant Compared To Others - High"
                    },
                    {
                        "dhOptionId": "2a8529c6-3d11-4d18-9849-08dbc0f1ca73",
                        "dhOptionName": "Good , May Tend Towards Laziness"
                    }
                ]
            },
            {
                "dhQuestionId": "74800caf-51c5-4c7f-4f07-08dbc0ec3640",
                "dhQuestionName": "Bowel Movement",
                "dhOptions": [
                    {
                        "dhOptionId": "b25a0cc8-e530-4e09-984a-08dbc0f1ca73",
                        "dhOptionName": "Irregular- Tending Towards Constipation"
                    },
                    {
                        "dhOptionId": "0437d39a-857e-4954-984b-08dbc0f1ca73",
                        "dhOptionName": "Frequent - More Than 1-2 Times A Day"
                    },
                    {
                        "dhOptionId": "1cdda8f6-cf9d-423a-984c-08dbc0f1ca73",
                        "dhOptionName": "Regular, Once Or Twice"
                    }
                ]
            }
        ]

        const data2 =
        {
            "dhScore": 7,
            "finalDHResult": "Vishma agani",
            "answerGroupDTOs": [
                {
                    "questionId": "1b289ccb-c9a3-4908-4f02-08dbc0ec3640",
                    "questionName": "How Is Your Hunger",
                    "optionId": "6cecdec1-8af5-4879-983b-08dbc0f1ca73",
                    "optionName": "Irregular, Varies"
                },
                {
                    "questionId": "1b289ccb-c9a3-4908-4f02-08dbc0ec3640",
                    "questionName": "How Is Your Hunger",
                    "optionId": "5c8ec98e-a181-4038-983c-08dbc0f1ca73",
                    "optionName": "Strong, Cannot Skip Meals"
                },
                {
                    "questionId": "8f1fffd8-f6bc-4540-4f03-08dbc0ec3640",
                    "questionName": "Food Capacity",
                    "optionId": "a759d4c9-4c4e-40fd-983e-08dbc0f1ca73",
                    "optionName": "Variable"
                },
                {
                    "questionId": "33ed16e2-df65-4772-4f04-08dbc0ec3640",
                    "questionName": "After Eating, How Long Does It Take To Feel Hungry",
                    "optionId": "d5f2e80c-c319-4ea4-9842-08dbc0f1ca73",
                    "optionName": "Within Two- Three Hours, Hungry Sooner"
                },
                {
                    "questionId": "0ac9048b-b81b-4ba2-4f05-08dbc0ec3640",
                    "questionName": "Fluctuations Of body Weight",
                    "optionId": "427912f9-6136-45be-9844-08dbc0f1ca73",
                    "optionName": "Easy To Lose, Difficult To Gain - Underweight"
                },
                {
                    "questionId": "88912327-4ef0-4b68-4f08-08dbc0ec3640",
                    "questionName": "Quality Of Stool",
                    "optionId": "f03078d9-0813-41ab-984d-08dbc0f1ca73",
                    "optionName": "Hard, Dry"
                },
                {
                    "questionId": "98eb925d-b709-4f2c-4f09-08dbc0ec3640",
                    "questionName": "Symptoms",
                    "optionId": "556bef9f-9c98-4506-9850-08dbc0f1ca73",
                    "optionName": "Gas, Bloating"
                }
            ]
        }

        // Function to modify data1 based on data2


        modifyData();
    }, []);


    const modifyData = () => {
        const modifiedData = data1.map((question) => {
            const matchingAnswer = data2.answerGroupDTOs.find(
                (answer) => answer.questionId === question.dhQuestionId
            );

            if (matchingAnswer) {
                const selectedOption = question.dhOptions.map((option) => {
                    if (option.dhOptionId === matchingAnswer.optionId) {
                        return {
                            ...option,
                            selected: true,
                        };
                    } else {
                        return {
                            ...option,
                            selected: false,
                        };
                    }
                });

                return {
                    ...question,
                    dhOptions: selectedOption,
                };
            }

            // If no match, set selected to false for all options
            const unselectedOptions = question.dhOptions.map((option) => ({
                ...option,
                selected: false,
            }));

            return {
                ...question,
                dhOptions: unselectedOptions,
            };
        });

        setModifiedData(modifiedData);
    };
    return (
        <div>
            <h1>Modified Data</h1>
            <pre>{JSON.stringify(modifiedData, null, 2)}</pre>
            {
                modifiedData.map((data: any) => {
                    return (<>
                        <div className='text-blue-400'>{data.dhQuestionName}</div>
                        <div>
                            {
                                data.dhOptions.map((datae1: any) => {
                                    return (<>
                                        <div className='flex gap-3'>
                                            {/* <p>{datae1.selected}</p> */}
                                            <p> {datae1.dhOptionName}</p>
                                            <input type="radio" checked={datae1.selected} name={data.dhQuestionName} />
                                        </div>
                                    </>)
                                })
                            }

                        </div>
                    </>)
                })
            }
        </div>
    );
};

export default App;
