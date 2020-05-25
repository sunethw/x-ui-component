import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';



import { SearchComponent } from './search.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
    ButtonModule,
		MultiSelectModule,
		InputTextModule,
		DropdownModule,
		HttpClientModule

	],
	declarations: [
		SearchComponent
	],
	exports: [
		SearchComponent,

	]
})
export class SearchModule { }
