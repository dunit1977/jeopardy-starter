import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreGameComponent } from './score-game.component';

describe('ScoreGameComponent', () => {
  let component: ScoreGameComponent;
  let fixture: ComponentFixture<ScoreGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
