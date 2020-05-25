import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { PaginationComponent } from './pagination.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,


	],
	declarations: [
		PaginationComponent
	],
	exports: [
		PaginationComponent
	]
})
export class PaginationModule { }