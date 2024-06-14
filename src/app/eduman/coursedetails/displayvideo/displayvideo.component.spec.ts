import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayvideoComponent } from './displayvideo.component';

describe('DisplayvideoComponent', () => {
  let component: DisplayvideoComponent;
  let fixture: ComponentFixture<DisplayvideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayvideoComponent]
    });
    fixture = TestBed.createComponent(DisplayvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
