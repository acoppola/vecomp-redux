import { Component } from '@angular/core';
import { IAppState, IOperation } from '../../redux/reducer';
import { NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'operations',
  templateUrl: './operations.component.html',
  styles: [`
    .table td:first-child { width: 25%; }
    .text-lg { font-size: 2rem; }
  `]
})
export class OperationsComponent {
  balance$: Observable<number>;
  operations: IOperation[];
  operationsSub: Subscription;

  constructor(private store: NgRedux<IAppState>) {
    this.balance$ = this.store.select(state => state.balance);
    this.operationsSub = this.store.select(state => state.operations)
      .subscribe(operations => this.operations = operations);
  }

  ngOnDestroy() {
    this.operationsSub.unsubscribe();
  }
}
