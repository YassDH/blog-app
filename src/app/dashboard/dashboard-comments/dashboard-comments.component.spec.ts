import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCommentsComponent } from './dashboard-comments.component';

describe('DashboardCommentsComponent', () => {
  let component: DashboardCommentsComponent;
  let fixture: ComponentFixture<DashboardCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardCommentsComponent]
    });
    fixture = TestBed.createComponent(DashboardCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
