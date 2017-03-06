import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddOperationComponent } from './components/add-operation/add-operation.component';
import { OperationsComponent } from './components/operations/operations.component';

import { applyMiddleware, Store, combineReducers, compose, createStore } from 'redux';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { rootReducer, IAppState } from './redux/reducer';

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const store: Store<IAppState> = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware())
);

@NgModule({
  declarations: [
    AppComponent,
    AddOperationComponent,
    OperationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
