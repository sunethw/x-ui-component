import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { XFormField } from '../models/x-form-field';
import { XFormFieldConfig } from '../models/x-form-field-config';

@Component({
  selector: 'app-x-input',
  templateUrl: './x-input.component.html',
  styleUrls: ['./x-input.component.scss']
})
export class XInputComponent implements XFormField {
  config: XFormFieldConfig;
  group: FormGroup;
}
