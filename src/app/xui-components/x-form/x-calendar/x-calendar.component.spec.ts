import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XCalendarComponent } from './x-calendar.component';

describe('XCalendarComponent', () => {
  let component: XCalendarComponent;
  let fixture: ComponentFixture<XCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
