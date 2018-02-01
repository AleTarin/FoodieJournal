import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeStatusComponent } from './challenge-status.component';

describe('ChallengeStatusComponent', () => {
  let component: ChallengeStatusComponent;
  let fixture: ComponentFixture<ChallengeStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
