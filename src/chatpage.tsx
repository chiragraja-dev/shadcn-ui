import React from 'react'
import Chatbot from './components/Chatbot'

const ChatPage = () => {
    return (
        <div> <main className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Chatbot</h1>
            <Chatbot />
        </main></div>
    )
}

export default ChatPage