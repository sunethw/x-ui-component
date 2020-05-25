import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { XFormField } from '../models/x-form-field';
import { XFormFieldConfig } from '../models/x-form-field-config';

@Component({
  selector: 'app-x-checkbox',
  templateUrl: './x-checkbox.component.html',
  styleUrls: ['./x-checkbox.component.scss']
})
export class XCheckboxComponent implements XFormField {
  config: XFormFieldConfig;
  group: FormGroup;

}
