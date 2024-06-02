import React from 'react';

interface AppBtnProps {
    onClick: () => void;
    text: string;
}

export const AppBtn: React.FC<AppBtnProps> = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
}

