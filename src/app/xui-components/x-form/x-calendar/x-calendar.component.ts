import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { XFormField } from '../models/x-form-field';
import { XFormFieldConfig } from '../models/x-form-field-config';
import moment from 'moment';

@Component({
  selector: 'app-x-calendar',
  templateUrl: './x-calendar.component.html',
  styleUrls: ['./x-calendar.component.scss']
})
export class XCalendarComponent implements XFormField, OnInit {
  config: XFormFieldConfig;
  group: FormGroup;

  constructor() { }


  ptbr;
  ngOnInit() {
    moment.locale(localStorage.getItem('lang'));

    this.ptbr = {
      firstDayOfWeek: 0,
      dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
      dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
      dayNamesMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
      monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
      today: 'Hoje',
      clear: 'Limpar'
    };
    console.log(this.ptbr);
  }

  get minDate() {
    return this.config.minDate == 'today' ? new Date() : this.config.minDate == null ? null : moment(this.config.minDate).toDate();
  }

  get maxDate() {
    return this.config.maxDate == 'today' ? new Date() : this.config.maxDate == null ? null : moment(this.config.maxDate).toDate();
  }
}
