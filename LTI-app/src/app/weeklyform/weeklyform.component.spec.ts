import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyformComponent } from './weeklyform.component';

describe('WeeklyformComponent', () => {
  let component: WeeklyformComponent;
  let fixture: ComponentFixture<WeeklyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
