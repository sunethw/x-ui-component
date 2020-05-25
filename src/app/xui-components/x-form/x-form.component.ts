import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { XFormFieldConfig } from '../x-form/models/x-form-field-config';

@Component({
  selector: 'app-x-form',
  templateUrl: './x-form.component.html',
  styleUrls: ['./x-form.component.scss']
})
export class XFormComponent implements OnChanges, OnInit {

  @Input()
  formType: string;

  @Input()
  config: XFormFieldConfig[] = [];

  @Output()
  submit: EventEmitter<any> = new EventEmitter<any>();

  filterNoneButtons(config: XFormFieldConfig) {
    return config.type !== 'button';
  }
  filterButtons(config: XFormFieldConfig) {
    return config.type === 'button';
  }


  form: FormGroup;

  get controls() { return this.config.filter(({ type }) => type !== 'button'); }
  get changes() { return this.form.valueChanges; }
  get valid() { return this.form.valid; }
  get value() { return this.form.value; }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.createGroup();
    this.form.valueChanges.subscribe(data => this.onValueChanged(data));
    console.log(this.config)
  }


  ngOnChanges() {
    console.log(this.form);
    if (this.form) {
      const controls = Object.keys(this.form.controls);
      const configControls = this.controls.map((item) => item.name);
      controls
        .filter((control) => !configControls.includes(control))
        .forEach((control) => this.form.removeControl(control));

      configControls
        .filter((control) => !controls.includes(control))
        .forEach((name) => {
          const config = this.config.find((control) => control.name === name);
          this.form.addControl(name, this.createControl(config));
        });
    }
  }

  createGroup() {
    const group = this.fb.group({});
    this.controls.forEach(control => group.addControl(control.name, this.createControl(control)));
    return group;
  }

  createControl(config: XFormFieldConfig) {
    const { disabled, validation, value } = config;
    return this.fb.control({ disabled, value }, validation);
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.submit.emit(this.value);
  }

  setDisabled(name: string, disable: boolean) {
    if (this.form.controls[name]) {
      const method = disable ? 'disable' : 'enable';
      this.form.controls[name][method]();
      return;
    }

    this.config = this.config.map((item) => {
      if (item.name === name) {
        item.disabled = disable;
      }
      return item;
    });
  }

  setValue(name: string, value: any) {
    this.form.controls[name].setValue(value, { emitEvent: true });
  }

  onValueChanged(data?: any) {
    if (!this.form) {
      return;
    }
    const form = this.form;
    for (const field in this.config) {
      if (this.config.hasOwnProperty(field)) {
        this.config[field]['errors'] = [];
        const control = form.get(this.config[field]['name']);
        if (control && control.dirty && !control.valid) {
          const message = `${this.config[field]['label']} is required`;
          this.config[field]['errors'].push(message);
        }
        console.log(this.config[field].errors);
      }
    }
  }

}
