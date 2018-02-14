import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GoogleMapComponent } from './google-map.component';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';

describe('GoogleMapComponent', () => {
  let component: GoogleMapComponent;
  let fixture: ComponentFixture<GoogleMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleMapComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA]  
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapComponent);
    component = fixture.componentInstance;
    component.latitude;
    component.longitude;
    component.height;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
