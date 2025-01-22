import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamAnswerComponent } from './exam-answer.component';

describe('ExamAnswerComponent', () => {
  let component: ExamAnswerComponent;
  let fixture: ComponentFixture<ExamAnswerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamAnswerComponent]
    });
    fixture = TestBed.createComponent(ExamAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
