import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddOperationComponent } from './components/add-operation/add-operation.component';
import { OperationsComponent } from './components/operations/operations.component';

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
