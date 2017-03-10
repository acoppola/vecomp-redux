import { Action } from 'redux';

export interface IAction extends Action {
  payload: any;
}

export function addDeposit(amount: number, description: string): IAction {
  const now = new Date();
  const prettyNow = now.toLocaleString();

  return {
    type: 'ADD_DEPOSIT',
    payload: {
      amount,
      description,
      date: prettyNow,
      type: 'DEPOSIT',
    },
  };
}

export function addWithdraw(amount: number, description: string): IAction {
  const now = new Date();
  const prettyNow = now.toLocaleString();

  return {
    type: 'ADD_WITHDRAW',
    payload: {
      amount,
      description,
      date: prettyNow,
      type: 'WITHDRAW',
    },
  };
}
