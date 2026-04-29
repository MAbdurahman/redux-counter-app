
import {INCREMENT, DECREMENT} from './counterActionTypes.js';

export const increment = () => ({
   type: INCREMENT,
});

export const decrement = () => ({
   type: DECREMENT,
});