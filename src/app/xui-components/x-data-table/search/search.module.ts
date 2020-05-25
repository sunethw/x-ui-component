import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { InputTextModule, MultiSelectModule, DropdownModule } from 'primeng';
import { TranslateModule } from '@ngx-translate/core';

import { SearchComponent } from './search.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		MultiSelectModule,
		InputTextModule,
		DropdownModule,
		HttpClientModule,
		TranslateModule

	],
	declarations: [
		SearchComponent
	],
	exports: [
		SearchComponent,
		TranslateModule
	]
})
export class SearchModule { }
