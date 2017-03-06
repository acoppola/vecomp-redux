import { Component } from '@angular/core';
import { IAppState } from '../../redux/reducer';
import { NgRedux } from '@angular-redux/store';
import { addDeposit, addWithdraw } from '../../redux/actions';

@Component({
  selector: 'add-operation',
  templateUrl: './add-operation.component.html'
})
export class AddOperationComponent {
  depositModel = { amount: 0, description: '' };
  withdrawModel = { amount: 0, description: '' };

  constructor(private store: NgRedux<IAppState>) { }

  handleDeposit() {
    this.store.dispatch(addDeposit(this.depositModel.amount, this.depositModel.description));

    this.depositModel = { amount: 0, description: '' };
  }

  handleWithdraw() {
    this.store.dispatch(addWithdraw(this.withdrawModel.amount, this.withdrawModel.description));

    this.withdrawModel = { amount: 0, description: '' };
  }
}
