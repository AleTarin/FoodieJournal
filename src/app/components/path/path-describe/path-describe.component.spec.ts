import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathDescribeComponent } from './path-describe.component';

describe('PathDescribeComponent', () => {
  let component: PathDescribeComponent;
  let fixture: ComponentFixture<PathDescribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathDescribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathDescribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
