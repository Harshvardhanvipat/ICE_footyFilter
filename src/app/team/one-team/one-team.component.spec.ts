import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTeamComponent } from './one-team.component';

describe('OneTeamComponent', () => {
  let component: OneTeamComponent;
  let fixture: ComponentFixture<OneTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
