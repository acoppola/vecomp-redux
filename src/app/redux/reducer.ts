import { Reducer, Action } from 'redux';

interface IOperation {
  amount: number;
  type: 'DEPOSIT' | 'WITHDRAW';
  description: string;
  date: string;
}

export interface IAppState {
  balance: string;
};

export function rootReducer(state: IAppState = {} as IAppState): IAppState {
  return state;
};
