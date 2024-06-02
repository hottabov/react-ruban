import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import Data from './data.json';
function App() {

    // const [state, setState] = useState({
    //     isAdmin: false,
    //     userName: "admin"
    // })
    // const {isAdmin} = state;
    // const assignAdmin = () => {
    //     setState({ ...state, isAdmin: true})
    // }

const [state, setState] = useState({
        isAdmin: false,
        userName: "admin"
    })
    const {isAdmin} = state;
    const assignAdmin = () => {
        setState({ ...state, isAdmin: true})
    }

    const [counter, setCounter] = useState<number>(0);

    console.log(Data);

    return (
        <div className="App">

            <h1>Hello, user, you is {isAdmin ? "SUPER ADMIN" : "a user"}</h1>
            <button onClick={assignAdmin}>Assign admin</button>

            <Header data={Data} />
            <Counter counter={counter} setCounter={setCounter} />
        </div>
    );
}

export default App;
