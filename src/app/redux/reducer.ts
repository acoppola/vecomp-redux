import { Reducer } from 'redux';
import { IAction } from './actions';

export interface IOperation {
  amount: number;
  type: 'DEPOSIT' | 'WITHDRAW';
  description: string;
  date: string;
}

export interface IAppState {
  balance: number;
  operations: IOperation[];
};

const defaultState: IAppState = {
  balance: 0,
  operations: [],
};

export function rootReducer(state: IAppState = defaultState, action: IAction): IAppState {
  switch (action.type) {
    case 'ADD_DEPOSIT':
      return Object.assign({}, state, {
        balance: state.balance + action.payload.amount,
        operations: state.operations.concat(action.payload),
      });
    case 'ADD_WITHDRAW':
      return Object.assign({}, state, {
        balance: state.balance - action.payload.amount,
        operations: state.operations.concat(action.payload),
      });
    default:
      return state;
  }
};
