import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../redux/counterActions.js';


export default function Counter() {
   const count = useSelector((state) => state.count);
   const dispatch = useDispatch();


   return (
      <div>
         <h3 className='counter_paragraph'>Count:&nbsp; {count}</h3>
         <button onClick={() => dispatch(decrement())}>Decrement</button>
         <button onClick={() => dispatch(increment())}>Increment</button>
      </div>

   );
}