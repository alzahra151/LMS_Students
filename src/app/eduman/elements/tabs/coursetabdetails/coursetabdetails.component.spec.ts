import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursetabdetailsComponent } from './coursetabdetails.component';

describe('CoursetabdetailsComponent', () => {
  let component: CoursetabdetailsComponent;
  let fixture: ComponentFixture<CoursetabdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursetabdetailsComponent]
    });
    fixture = TestBed.createComponent(CoursetabdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
