import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DognhutChartComponent } from './dognhut-chart.component';

describe('DognhutChartComponent', () => {
  let component: DognhutChartComponent;
  let fixture: ComponentFixture<DognhutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DognhutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DognhutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
