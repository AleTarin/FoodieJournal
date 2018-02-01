import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathsDropdownComponent } from './paths-dropdown.component';

describe('PathsDropdownComponent', () => {
  let component: PathsDropdownComponent;
  let fixture: ComponentFixture<PathsDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathsDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
