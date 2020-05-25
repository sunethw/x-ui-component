import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XDataTableComponent } from './x-data-table.component';

describe('XDataTableComponent', () => {
  let component: XDataTableComponent;
  let fixture: ComponentFixture<XDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [XDataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
