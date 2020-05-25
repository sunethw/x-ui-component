import { Component, ViewChild, AfterViewInit, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { XFormComponent } from './xui-components/x-form/x-form.component';
import { Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, AfterViewInit  {
  name = 'Angular ' ;

  @ViewChild('surveyGeneralDetails', { static: true }) form: XFormComponent;
  configSurvey = [
    {
      type: 'input',
      disabled: false,
      value: '',
      label: 'Name',
      name: 'name',
      validation: [Validators.required],
    },
    {
      type: 'input',
      disabled: false,
      value: '',
      label: 'username',
      name: 'owner',
      validation: [Validators.required],
    },

    {
      type: 'select',
      disabled: false,
      value: 4,
      placeholder: 'select a food',
      label: 'Favourite Food',
      name: 'food',
      options: [
        { value: 1, label: 'Pizza' },
        { value: 2, label: 'Cachorro Quente' },
        { value: 3, label: 'Pão de Milho' },
        { value: 4, label: 'Café' }
      ],
      validation: [Validators.required]
    },
      {
      type: 'datepicker',
      name: 'Enter date',
      label: 'Selecione a data',
      minDate: '2020-05-22',
      maxDate: '2020-12-20'
    },
  
  
    {
      label: 'Submit',
      name: 'submit',
      type: 'button',
      disabled: false
    },
  ];


  constructor() {
  }

  ngOnInit(): void {
    //this.configEmailTemplate = this.configEmailTemplate.concat(this.customAttributes);
  }
  ngAfterViewInit() {

    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.form.setDisabled('submit', true);
  }

  submitSurvey(value) {
    console.log(value);
 
  }
}
