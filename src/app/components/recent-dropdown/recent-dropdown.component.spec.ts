import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentDropdownComponent } from './recent-dropdown.component';

describe('RecentDropdownComponent', () => {
  let component: RecentDropdownComponent;
  let fixture: ComponentFixture<RecentDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
