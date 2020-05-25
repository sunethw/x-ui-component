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
    addButton: boolean;
  taskEdit: boolean;
  taskDelete: boolean;


  rows: any[];
  url: string;
  columns: any[];
  title: string;


  @ViewChild('surveyGeneralDetails', { static: true }) form: XFormComponent;
  configSurvey = [
    {
      type: 'input',
      disabled: false,
      value: '',
      label: 'ID',
      name: 'id',
      validation: [Validators.required],
    },
    {
      type: 'input',
      disabled: false,
      value: '',
      label: 'Description',
      name: 'description',
      validation: [Validators.required],
    },
     {
      type: 'input',
      disabled: false,
      value: '',
      label: 'Employee',
      name: 'employee',
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
   
    },
      {
      type: 'datepicker',
      name: 'date',
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
    //this.Template = this.Template2.concat(this.customAttributes);
    this.title = 'Survey List';
    this.url = 'create-survey';
    this.columns = [
      { name: 'Id', attr: 'id', type: 'string' },
      { name: 'Description', attr: 'description', type: 'string' },
      { name: 'Employee', attr: 'employee', type: 'string' }
    ];
    this.rows = [
      { id: '1', 'agentId': 'Agensdasdat Id', 'description': 'agdasdsadentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
      { id: '1', 'agentId': 'Agent Id', 'description': 'agentId', 'employee': 'string' },
    ];
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
    localStorage.setItem('users', JSON.stringify(value));
 
  }
}
