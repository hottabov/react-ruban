import React from 'react';
import logo from './logo.svg';
import './App.css';

const Data = {
  "firstName": "Vadym",
  "bio": "I'm a web-developer who studies React.",
  "contacts": {
    "phone": "0434179988",
    "telegram": "@hottabov"
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Name: {Data.firstName}</p>
        <p>Bio: {Data.bio}</p>
        <p>Contacts:</p>
        <ul>
          <li>Phone: {Data.contacts.phone}</li>
          <li>Telegram: {Data.contacts.telegram}</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
