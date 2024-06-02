import React, { Component } from 'react';
import { AppBtn } from "./btn";

interface CounterProps {
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
}

class Counter extends Component<CounterProps> {
    render() {
        const { counter, setCounter } = this.props;
        return (
            <div>
                <h2>Counter: {counter} times</h2>
                <AppBtn onClick={() => setCounter(counter + 1)} text="Click me!" />
            </div>
        );
    }
}

export default Counter;
