import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestSurveyComponent } from './latest-survey.component';

describe('LatestSurveyComponent', () => {
  let component: LatestSurveyComponent;
  let fixture: ComponentFixture<LatestSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
