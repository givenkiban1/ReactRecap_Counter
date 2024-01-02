import { useEffect, useState } from 'react';
import confetti from '../assets/scripts/confetti';
import './counter.css';

const getRandomNumber = () => {
    return Math.floor(Math.random() * 15) + 1;
};


export default function Counter(){
    const [count, incrementCount] = useState(0);
    const [randomNumber, setRandomNumber] = useState(getRandomNumber());

    console.log("this is confetti:");
    console.log(confetti);

    useEffect(()=>{
        // generate  a random number between 1 and 15

        if (count === randomNumber) {
            confetti.start();
            setTimeout(() => {
                confetti.stop();
                setRandomNumber(getRandomNumber());
                incrementCount(0);
            }, 5000); // Stop the confetti effect after 5 seconds
        }

    }, [count]);

    

    const btnClick = (event)=>{
        incrementCount(count+1);
    };
    return (
        <div className="counter">
            <h1>Counter</h1>
            <div className='count-number'>{count}</div>
            <div className="button" onClick={btnClick}>
                Click
            </div>
        </div>
    );
}