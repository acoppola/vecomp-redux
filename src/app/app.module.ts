import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddOperationComponent } from './components/add-operation/add-operation.component';
import { OperationsComponent } from './components/operations/operations.component';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { rootReducer, IAppState } from './redux/reducer';

@NgModule({
  declarations: [
    AppComponent,
    AddOperationComponent,
    OperationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>, private devTools: DevToolsExtension) {
    ngRedux.configureStore(rootReducer, undefined, [], [devTools.enhancer()]);
  }
}
