import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { XFormField } from '../models/x-form-field';
import { XFormFieldConfig } from '../models/x-form-field-config';

@Component({
  selector: 'app-x-select',
  templateUrl: './x-select.component.html',
  styleUrls: ['./x-select.component.scss']
})
export class XSelectComponent implements XFormField {

  config: XFormFieldConfig;
  group: FormGroup;

}
