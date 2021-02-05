import { useReducer } from 'react';
import { createContainer } from 'react-tracked';

const initialState = {
  apples: 1,
  bananas: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_APPLE':
      return {
        ...state,
        apples: state.apples + 1,
      };
    case 'ADD_BANANA':
      return {
        ...state,
        bananas: state.bananas + 1,
      };
    default:
      return state;
  }
};

const useMyState = () => useReducer(reducer, initialState);

export const { Provider: GlobalStateProvider, useTracked } = createContainer(
  useMyState
);
