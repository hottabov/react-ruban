import React from 'react';

interface ContactsProps {
    contacts: {
        phone: string;
        telegram: string;
    };
}

const Contacts: React.FC<ContactsProps> = ({ contacts }) => {
    return (
        <ul>
            <li>
                Phone: <a href={`tel:${contacts.phone}`} target="_blank" rel="noreferrer" aria-label={`Phone number ${contacts.phone}`}>{contacts.phone}</a>
            </li>
            <li>
                Telegram: <a href={`https://t.me/${contacts.telegram}`} target="_blank" rel="noreferrer" aria-label={`Telegram link for ${contacts.telegram}`}>{contacts.telegram}</a>
            </li>
        </ul>
    );
}

export default Contacts;
