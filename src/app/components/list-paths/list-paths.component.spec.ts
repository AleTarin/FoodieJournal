import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPathsComponent } from './list-paths.component';

describe('ListPathsComponent', () => {
  let component: ListPathsComponent;
  let fixture: ComponentFixture<ListPathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
