import React, { useState, useRef, useEffect } from 'react';

interface Message {
    text: string;
    sender: 'user' | 'bot';
}

const Chatbot: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const sendMessage = (text: string) => {
        setMessages(prevMessages => [...prevMessages, { text, sender: 'user' }]);
        setTimeout(() => {
            receiveMessage('This is a sample response from the chatbot.');
        }, 500);
    };

    const receiveMessage = (text: string) => {
        setMessages(prevMessages => [...prevMessages, { text, sender: 'bot' }]);
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    useEffect(() => {

        document.body.style.overflow = "hidden";

    }, [])

    return (
        <div className="flex flex-col h-screen">
            <div className="flex-grow p-4 overflow-y-auto">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'
                            }`}
                    >
                        <span
                            className={`inline-block py-2 px-4 rounded-lg ${message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200'
                                }`}
                        >
                            {message.text}
                        </span>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="p-4">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none"
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        if (e.key === 'Enter') {
                            sendMessage((e.target as HTMLInputElement).value);
                            (e.target as HTMLInputElement).value = '';
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default Chatbot;
