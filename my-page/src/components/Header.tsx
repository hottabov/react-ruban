import React from 'react';
import Contacts from './Contacts';

interface HeaderProps {
    data: {
        firstName: string;
        bio: string;
        contacts: {
            phone: string;
            telegram: string;
        };
    };
}

const Header: React.FC<HeaderProps> = ({ data }) => {
    return (
        <header className="App-header">
            <p>Name: {data.firstName}</p>
            <p>Bio: {data.bio}</p>
            <p>Contacts:</p>
            <Contacts contacts={data.contacts} />
        </header>
    );
}

export default Header;
