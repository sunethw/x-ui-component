import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XDataTableComponent } from './x-data-table.component';
import { SearchModule } from './search/search.module';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [XDataTableComponent],
  imports: [
    CommonModule,
    SearchModule,
    TableModule,
  ],
  exports: [
    XDataTableComponent
  ],
  providers: []
})
export class XDataTableModule { }
