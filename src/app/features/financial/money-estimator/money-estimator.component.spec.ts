import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyEstimatorComponent } from './money-estimator.component';

describe('MoneyEstimatorComponent', () => {
  let component: MoneyEstimatorComponent;
  let fixture: ComponentFixture<MoneyEstimatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyEstimatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyEstimatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
