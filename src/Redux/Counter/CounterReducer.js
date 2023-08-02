import React from 'react';
import { DECREMENT, INCREAMENT } from './ActionTypes';
const initialState = {
  value: 0
}

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREAMENT:
      return {
        ...state,
        value: state.value + 1
      }
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1
      }



    default: return state
  }
};

export default CounterReducer;