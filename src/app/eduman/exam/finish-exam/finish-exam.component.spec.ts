import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishExamComponent } from './finish-exam.component';

describe('FinishExamComponent', () => {
  let component: FinishExamComponent;
  let fixture: ComponentFixture<FinishExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinishExamComponent]
    });
    fixture = TestBed.createComponent(FinishExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
