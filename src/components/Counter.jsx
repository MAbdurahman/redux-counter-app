import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../redux/counterActions.js';


export default function Counter() {
   const count = useSelector((state) => state.count);
   const dispatch = useDispatch();


   return (
      <div>
         <p className='counter_paragraph'>Count:&nbsp; {count}</p>
         <button onClick={() => dispatch(increment())}>Increment</button>
         <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>

   );
}