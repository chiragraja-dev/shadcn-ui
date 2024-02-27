import React, { useState } from 'react';
import { Table, Button, Input, Form } from 'antd';
import { ColumnsType } from 'antd/lib/table';

interface AyurvedaData {
    col: string;
    row: string;
}

const RecomendationV2: React.FC = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState<AyurvedaData[]>([
        {
            "col": "abhyangam",
            "row": "vatapitta,Bala asvagandha laksadi,Shira bala tailam,Laksadi tailam,Vataini tailam"
        },
        {
            "col": "shiropichu",
            "row": "vatapitta,Vataaini,Narayanna tailam,Himasagara,Chadanadi"
        },
        {
            "col": "shirodhara",
            "row": "vatapitta,Ksirabala,Dhanvantaram,Balaguduchyadi,Valiya chandanadi"
        },
        {
            "col": "nasyam",
            "row": "vatapitta,Ksheera tailam"
        },
        {
            "col": "udvartanam",
            "row": "vatapitta,Jivantyadi churnam"
        },
        {
            "col": "thalam",
            "row": "vatapitta,Kshieera bbala tailam,Vatasini with kaccuradi churnam,Panchagandha churnam with Dhannvantara tailam"
        },
        {
            "col": "vasti",
            "row": "vatapitta,Dvipanchamuladi vasti"
        }
    ]);

    const [editingKey, setEditingKey] = useState('');
    const [editingCol, setEditingCol] = useState<string | null | any>(null);
    const [editingRow, setEditingRow] = useState<string | null | any>(null);

    const isEditing = (record: AyurvedaData) => record.col === editingKey;

    const handleEdit = (key: React.Key) => {
        const recordToEdit = data.find((item) => item.col === key);
        if (recordToEdit) {
            setEditingKey(key.toString());
            setEditingCol(recordToEdit.col);
            setEditingRow(recordToEdit.row);
            form.setFieldsValue({
                col: recordToEdit.col,
                row: recordToEdit.row,
            });
        }
    };

    const handleSave = async () => {
        const row = editingRow
        try {
            const newData = data.map((item) =>
                item.col === editingKey ? { ...item, row } : item
            );
            console.log(newData)
            setData(newData);
            setEditingKey('');
            setEditingCol(null);
            setEditingRow(null);
            form.resetFields();
        } catch (err) {
            console.log('Validate Failed:', err);
        }
    };

    const handleDelete = (key: React.Key) => {
        const newData = data.filter((item) => key !== item.col);
        setData(newData);
        setEditingKey('');
        setEditingCol(null);
        setEditingRow(null);
        form.resetFields();
    };

    const columns: ColumnsType<AyurvedaData> = [
        {
            // title: 'Column',
            dataIndex: 'col',
            width: '25%',
            render: (_, record) => (
                isEditing(record) ? (
                    <Input

                        value={editingCol}
                        onChange={(e) => setEditingCol(e.target.value)}
                    />
                ) : (
                    record.col
                )
            ),
        },
        {
            // title: 'Row',
            dataIndex: 'row',
            width: '50%',
            render: (_, record) => (
                isEditing(record) ? (
                    <Input
                        autoFocus
                        value={editingRow}
                        onChange={(e) => setEditingRow(e.target.value)}
                    />
                ) : (
                    record.row
                )
            ),
        },
        {
            // title: 'Action',
            dataIndex: 'action',
            render: (_, record) => (
                <span>
                    {isEditing(record) ? (
                        <>
                            <Button type="link" onClick={handleSave} style={{ marginRight: 8 }}>
                                Save
                            </Button>
                            <Button type="link" onClick={() => setEditingKey('')}>
                                Cancel
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button type="link" onClick={() => handleEdit(record.col)}>
                                Edit
                            </Button>
                            <Button type="link" onClick={() => handleDelete(record.col)}>
                                Delete
                            </Button>
                        </>
                    )}
                </span>
            ),
        },
    ];

    const handleAdd = () => {
        const newRow = {
            col: '',
            row: '',
        };
        setData([...data, newRow]);
    };

    return (
        <Form form={form} component={false}>
            <Button onClick={handleAdd}>Add Row</Button>
            <Table
                bordered
                dataSource={data}
                columns={columns}
                rowClassName={(record) => (isEditing(record) ? 'editable-row' : '')}
                pagination={false}
            />
        </Form>
    );
};

export default RecomendationV2;



