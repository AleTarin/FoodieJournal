import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RanoutoftimemessageComponent } from './ranoutoftimemessage.component';

describe('RanoutoftimemessageComponent', () => {
  let component: RanoutoftimemessageComponent;
  let fixture: ComponentFixture<RanoutoftimemessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RanoutoftimemessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RanoutoftimemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
