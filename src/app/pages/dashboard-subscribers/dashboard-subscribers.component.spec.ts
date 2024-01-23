import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSubscribersComponent } from './dashboard-subscribers.component';

describe('DashboardSubscribersComponent', () => {
  let component: DashboardSubscribersComponent;
  let fixture: ComponentFixture<DashboardSubscribersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSubscribersComponent]
    });
    fixture = TestBed.createComponent(DashboardSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
