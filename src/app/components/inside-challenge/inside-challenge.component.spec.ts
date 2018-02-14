// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { InsideChallengeComponent } from './inside-challenge.component';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { ActivatedRoute, ParamMap } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';
// import { Location } from '@angular/common';
// import { AuthService } from '../../services/auth.service';
// import { YelpService } from '../../services/yelp.service';
// import { PathsService } from '../../services/paths.service';
// import { Observable } from 'rxjs/Observable';


// describe('InsideChallengeComponent', () => {
//   let component: InsideChallengeComponent;
//   let fixture: ComponentFixture<InsideChallengeComponent>;
//   let NgbModalMock = {};
//   let ActivatedRouteMock = {};
//   let LocationMock = {};
//   let AuthServiceMock = {};
//   let YelpServiceMock = { getData: ()=>{return {subscribe: () => {} } } }
//   let PathsServiceMock = {};

//   beforeEach(async(() => {

//     TestBed.configureTestingModule({
//       declarations: [ InsideChallengeComponent ],
//       schemas: [ CUSTOM_ELEMENTS_SCHEMA],
//       imports: [RouterTestingModule],
//       providers: [
//           {provide: YelpService, useValue: YelpServiceMock},
//           {provide: AuthService, useValue: AuthServiceMock},
//           {provide: NgbModal, useValue: NgbModalMock},
//           {provide: ActivatedRoute, useValue: ActivatedRouteMock},
//           {provide: Location, useValue: LocationMock},
//           {provide: PathsService, useValue: PathsServiceMock},
//        ] 
//     }).compileComponents();
//   })
// );

//   beforeEach(() => {
//     fixture = TestBed.createComponent(InsideChallengeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// }); 

