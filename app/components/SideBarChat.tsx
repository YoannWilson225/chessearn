'use client';
import { useState } from 'react';

const Sidebar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="w-1/4 h-full bg-gray-800 text-white">
            <div className="p-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-2 rounded bg-gray-700"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="mt-4">
                <ConversationList searchTerm={searchTerm} />
            </div>
        </div>
    );
};

const ConversationList = ({ searchTerm }: any) => {
    const conversations = [
        { id: 1, name: 'Henry Dholi' },
        { id: 2, name: 'Mariya Desoja' },
        { id: 3, name: 'Robert Jhon' },
        { id: 4, name: 'Cody Fisher' }
    ];

    return (
        <ul>
            {conversations
                .filter((conversation) =>
                    conversation.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((conversation) => (
                    <ConversationItem key={conversation.id} conversation={conversation} />
                ))}
        </ul>
    );
};

const ConversationItem = ({ conversation }: any) => {
    return (
        <li className="p-4 hover:bg-gray-700 cursor-pointer">
            <span>{conversation.name}</span>
        </li>
    );
};

export default Sidebar;
