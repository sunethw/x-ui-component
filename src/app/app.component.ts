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

  @ViewChild('surveyGeneralDetails', { static: true }) formSurvey: XFormComponent;
  configSurvey = [
    {
      type: 'input',
      disabled: false,
      value: '',
      label: 'CREATESURVEYS.SURVEYTITLE',
      name: 'surveyTitle',
      validation: [Validators.required],
    },
    {
      type: 'input',
      disabled: false,
      value: 'logged in user',
      label: 'CREATESURVEYS.OWNER',
      name: 'owner',
      validation: [Validators.required],
    },

    {
      type: 'select',
      disabled: false,
      value: 4,
      placeholder: 'Selecione sua comida favorita',
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
      name: 'data',
      label: 'Selecione a data',
      minDate: '2020-05-22',
      maxDate: '2020-12-20'
    },
    {
      type: 'input',
      disabled: false,
      value: 'Mikael Boff',
      label: 'Password',
      name: 'password',
      validation: [Validators.required, Validators.minLength(4)],
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button',
      disabled: false
    },
  ];

  configEmailTemplate = [
    {
      type: 'input',
      disabled: false,
      value: 'Mikael Boff',
      label: 'LOGIN.TITLE',
      name: 'username',
      validation: [Validators.required, Validators.minLength(4)],
    },
    {
      type: 'input',
      disabled: false,
      value: 'Mikael Boff',
      label: 'Password',
      name: 'password',
      validation: [Validators.required, Validators.minLength(4)],
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button',
      disabled: false
    },
  ];

  customAttributes = [
    {
      type: 'input',
      disabled: false,
      value: 'Mikael Boff',
      label: 'LOGIN.TITLE',
      name: 'usernamedd',
      validation: [Validators.required, Validators.minLength(4)],
    },
    {
      type: 'input',
      disabled: false,
      value: 'Mikael Boff',
      label: 'Password',
      name: 'passwordddd',
      validation: [Validators.required, Validators.minLength(4)],
    },

  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.configEmailTemplate = this.configEmailTemplate.concat(this.customAttributes);
  }
  ngAfterViewInit() {

    let previousValid = this.formSurvey.valid;
    this.formSurvey.changes.subscribe(() => {
      if (this.formSurvey.valid !== previousValid) {
        previousValid = this.formSurvey.valid;
        this.formSurvey.setDisabled('submit', !previousValid);
      }
    });

    this.formSurvey.setDisabled('submit', true);
  }

  submitSurvey(value) {
    console.log(value);
    // this.userService.register(value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       //this.alertService.success('Registration successful', true);
    //       this.messageService.add({ summary: 'toast here', severity: 'warn', sticky: true });
    //       this.router.navigate(['/login']);
    //     },
    //     error => {
    //       this.alertService.error(error);
    //     });
  }
}
