import React, { useState, useRef } from 'react';

const FileUploadButton: React.FC = () => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const editIndexRef = useRef<number | null>(null);


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        if (editIndexRef.current !== null) {
            const updatedFiles = [...selectedFiles];
            updatedFiles[editIndexRef.current] = files[0];
            setSelectedFiles(updatedFiles);
            editIndexRef.current = null;


        } else {
            setSelectedFiles([...selectedFiles, ...files]);


        }
    };

    const handleDelete = (index: number) => {
        const updatedFiles = [...selectedFiles];
        updatedFiles.splice(index, 1);
        setSelectedFiles(updatedFiles);


    };

    const handleEdit = (index: number) => {
        editIndexRef.current = index;
        if (fileInputRef.current) {
            fileInputRef.current.value = ''; // Clear the file input
            fileInputRef.current.click();
        }

    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mb-4">
                {selectedFiles.map((file, index) => (
                    <div key={index} className="mb-2">
                        {file.name ? (
                            <p className="text-sm text-gray-500 mb-2">{file.name}</p>
                        ) : (
                            <p className="text-sm text-gray-500 mb-2">No file selected</p>
                        )}
                        <div className="flex space-x-2">
                            <button
                                className="bg-yellow-500 text-white px-3 py-1 rounded-md text-sm hover:bg-yellow-600"
                                onClick={() => handleEdit(index)}>
                                Edit
                            </button>
                            <button
                                className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600"
                                onClick={() => handleDelete(index)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <label
                className="relative cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover-bg-blue-600"
            >
                Upload File
                <input
                    type="file"
                    multiple
                    className="hidden"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                />
            </label>


            <div className='mt-16'>
                <input type="file" name="" id="" multiple />
                <label htmlFor="">select the checkbox</label>
            </div>
        </div>
    );
};

export default FileUploadButton;
