import { useState } from 'react';
import './counter.css'

export default function Counter(){
    const [count, incrementCount] = useState(0);

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