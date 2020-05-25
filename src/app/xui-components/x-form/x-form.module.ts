import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { XFormComponent } from './x-form.component';
import { XInputComponent } from './x-input/x-input.component';
import { XButtonComponent } from './x-button/x-button.component';
import { XCalendarComponent } from './x-calendar/x-calendar.component';
import { XCheckboxComponent } from './x-checkbox/x-checkbox.component';
import { XSelectComponent } from './x-select/x-select.component';
import { XFormFieldDirective } from './directives/x-form-field.directive';
import { PasswordModule, InputTextModule, PanelModule, ButtonModule, CheckboxModule, DropdownModule, CalendarModule } from 'primeng';
import { TranslateModule } from '@ngx-translate/core';
import { FormElementFilterPipe } from './pipes/form-element-filter.pipe';
//import { FormElementRemoveFilterPipe } from './pipes/form-element-remove-filter.pipe';

@NgModule({
  declarations: [
    XFormComponent,
    XInputComponent,
    XButtonComponent,
    XCalendarComponent,
    XCheckboxComponent,
    XSelectComponent,
    XFormFieldDirective,
    FormElementFilterPipe,
    // FormElementRemoveFilterPipe

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PasswordModule,
    InputTextModule,
    PanelModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    TranslateModule
  ],
  exports: [
    XFormComponent,
    TranslateModule
  ],
  entryComponents: [
    XButtonComponent,
    XInputComponent,
    XSelectComponent,
    XCheckboxComponent,
    XCalendarComponent
  ]
})
export class XFormModule { }
