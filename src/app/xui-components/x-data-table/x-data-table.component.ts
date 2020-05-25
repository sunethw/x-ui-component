import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-x-data-table',
  templateUrl: './x-data-table.component.html'
})
export class XDataTableComponent implements OnInit, OnChanges {

  public dtSelectedRows: any[];

  @Input()
  taskEdit: boolean;

  @Input()
  taskDetail: boolean;
  @Input()
  taskForm: boolean;

  @Input()
  taskDelete: boolean;

  @Input()
  addButton: boolean;

  @Input()
  public title: string;

  @Input()
  public columns: any[];

  @Input()
  public rows: any[];


  @Input()
  public url: string;

  @Output()
  //onDelete: EventEmitter<DeleteEvent>;

  isValid: boolean;
  isInit: boolean;
  isToggle: boolean = false;
  public tempArray: any[];
  public resultArray: any[];

  constructor() {
    this.isValid = true;
    this.isInit = false;
    this.rows = [];
    //this.onDelete = new EventEmitter<DeleteEvent>();

  }

  ngOnInit() {
    this.resultArray = this.rows;
  }

  ngOnChanges() {
    // this.reDraw(event);
  }


  reDraw(event: any) {
    if (event !== undefined) {
      if (event === 'NDF') {
        this.isValid = false;
      } else {
        this.isValid = true;
        this.rows = event;
      }
    }
  }

  createNew() {
    console.log(this.url);
  
  }

}
