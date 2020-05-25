import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { XFormField } from '../models/x-form-field';
import { XFormFieldConfig } from '../models/x-form-field-config';

@Component({
  selector: 'app-x-button',
  templateUrl: './x-button.component.html',
  styleUrls: ['./x-button.component.scss']
})
export class XButtonComponent implements XFormField {
  config: XFormFieldConfig;
  group: FormGroup;
}
