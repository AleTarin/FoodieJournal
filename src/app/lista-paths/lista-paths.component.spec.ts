import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPathsComponent } from './lista-paths.component';

describe('ListaPathsComponent', () => {
  let component: ListaPathsComponent;
  let fixture: ComponentFixture<ListaPathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
