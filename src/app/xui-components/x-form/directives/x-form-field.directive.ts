import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { XButtonComponent } from '../x-button/x-button.component';
import { XInputComponent } from '../x-input/x-input.component';
import { XSelectComponent } from '../x-select/x-select.component';
import { XCheckboxComponent } from '../x-checkbox/x-checkbox.component';
import { XCalendarComponent } from '../x-calendar/x-calendar.component';


import { XFormField } from '../models/x-form-field';
import { XFormFieldConfig } from '../models/x-form-field-config';

const components: { [type: string]: Type<XFormField> } = {
  button: XButtonComponent,
  input: XInputComponent,
  select: XSelectComponent,
  checkbox: XCheckboxComponent,
  datepicker: XCalendarComponent
};

@Directive({
  selector: '[appXFormField]'
})
export class XFormFieldDirective implements XFormField, OnChanges, OnInit {

  @Input()
  config: XFormFieldConfig;

  @Input()
  group: FormGroup;

  component: ComponentRef<XFormField>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit() {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.type}).
        Supported types: ${supportedTypes}`
      );
    }
    const component = this.resolver.resolveComponentFactory<XFormField>(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }

}
