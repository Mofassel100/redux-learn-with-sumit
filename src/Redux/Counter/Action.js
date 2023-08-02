
import { DECREMENT, INCREAMENT } from './ActionTypes';

export const increment = (value) => {
  return {
    type: INCREAMENT,
    payload: value
  }
};
export const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value
  }
};

