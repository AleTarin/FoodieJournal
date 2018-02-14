import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Business } from '../../interfaces/business';
import { NO_ERRORS_SCHEMA, Input } from '@angular/core';
import { ContactInfoComponent } from './contact-info.component';

// class Business  {
//   @Input() is_closed = false;

  
// }

describe('ContactInfoComponent', () => {
  let component: ContactInfoComponent;
  let fixture: ComponentFixture<ContactInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ ContactInfoComponent ],
      providers: [Business],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInfoComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
