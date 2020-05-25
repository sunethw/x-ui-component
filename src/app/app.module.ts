import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
//shared UI components
import { XFormModule } from './xui-components/x-form/x-form.module';
import { XDataTableModule } from './xui-components/x-data-table/x-data-table.module';

@NgModule({
  imports: [BrowserModule, FormsModule,BrowserAnimationsModule, XFormModule, XDataTableModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
