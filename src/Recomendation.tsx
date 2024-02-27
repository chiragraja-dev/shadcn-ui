import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

interface CausativeFactor {
    causativeFactorName: string;
}

const data: string =
    "Waking up late in the morning ,Stress,Sedentary lifestyle,Overuse of unctuous substances both externally or internally,Other disease,lack of sleep,Incompatible food (e.g. fish and milk),Having regular late dinners,Going to bed late,Genetic,excessive use of Microwave,Excessive exposure to sunlight,Excessive exposure to cold temperatures,Excessive dry food,Excessive alcohol consumption,Excessive acidic foods,Environmental factors,Emotions- Fear, Anxiety, Worriness,Emotions - Angry, Frustration, irritability,Consuming too much sweets.,Consuming too much salads,Consuming stale food,Consuming lot of Spicy food.,Consuming lot of sour and salty food,Consuming lot of cold food,Consuming heavy food,Consuming food before digesting previous meal,Consuming excessive quantity of food,Consuming excessive processed food,Consuming cooked food that is older than 12 hours";

// ... (other imports)

const CausativeFactorsComponent: React.FC = () => {
    const [form] = Form.useForm();
    const [showInput, setShowInput] = useState(false);

    const causativeFactors: CausativeFactor[] = data.split(',').map((item, index) => ({
        causativeFactorName: item.trim(),
    }));

    useEffect(() => {
        if (causativeFactors) {
            form.setFieldsValue({ causativeFactors: causativeFactors });
        }
    }, [causativeFactors]);

    const onFinish = (values: any) => {
        console.log('Form values:', values);
    };

    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        if (showInput) {
            // Focus on the last added input field
            const lastAddedInput = document.querySelector('[name^="causativeFactors"][name$="inputField"]:last-of-type') as HTMLInputElement;
            if (lastAddedInput) {
                lastAddedInput.focus();
            }
        }
    }, [showInput]);


    return (
        <div>
            <Form form={form} onFinish={onFinish}>
                <Form.List name="causativeFactors">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'causativeFactorName']}

                                    >
                                        <Checkbox>{form.getFieldValue(['causativeFactors', name, 'causativeFactorName'])}</Checkbox>
                                    </Form.Item>

                                    {/* Conditionally render the input box only for new causative factors */}
                                    {showInput && !form.getFieldValue(['causativeFactors', name, 'causativeFactorName']) && (
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'causativeFactorName']}
                                        >
                                            <Input placeholder="Input Field" />
                                        </Form.Item>
                                    )}

                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => {
                                        add({ causativeFactorName: '' });
                                        setShowInput(true);
                                    }}
                                    icon={<PlusOutlined />}
                                >
                                    Add Causative Factor
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

            <div>
                <input
                    type="radio"
                    value={1}
                    checked={isChecked}
                    id={"option.key"}
                    onChange={handleCheckboxChange}
                    name='smae'
                />
                <label htmlFor={"option.key"}>{"option.name"}</label>
                <input
                    type="radio"
                    value={1}
                    // checked={ ''}
                    id={"option.key"}
                    // onChange={handleCheckboxChange}
                    name='smae'
                />
                <label htmlFor={"option.key"}>{"option.name"}</label>
            </div>
        </div>
    );
};

export default CausativeFactorsComponent;

