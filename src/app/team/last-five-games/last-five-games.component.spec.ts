import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastFiveGamesComponent } from './last-five-games.component';

describe('LastFiveGamesComponent', () => {
  let component: LastFiveGamesComponent;
  let fixture: ComponentFixture<LastFiveGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastFiveGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastFiveGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
