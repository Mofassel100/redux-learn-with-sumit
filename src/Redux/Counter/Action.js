import React from 'react';
import { DECREMENT, INCREAMENT } from './ActionTypes';

export const Increment = (value) => {
  return {
    types: INCREAMENT,
    payload: value
  }
};
export const Decrement = (value) => {
  return {
    types: DECREMENT,
    payload: value
  }
};

