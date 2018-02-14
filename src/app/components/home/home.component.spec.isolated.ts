import {} from 'jasmine';

import {  NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { HomeComponent } from './home.component';
import { YelpService } from '../../services/yelp.service';
import { RouterLinkStubDirective } from '../../testing/RouterLinkStub.directive';

class yelpServiceMock {
    YelpPhoneSearch(phone: string): string { 
        return phone;
    }
}


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let yelpService: YelpService;
  let de:      DebugElement;
  let el:      HTMLElement;
  let linkDes: any;
  let links: any;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
        declarations: [ HomeComponent, 
          RouterLinkStubDirective
         ],
        providers: [
            { provide: YelpService, useClass: yelpServiceMock }
        ]
        })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(HomeComponent);
          component    = fixture.componentInstance;
        });;
  }));

  beforeEach(() => {
    //fixture.detectChanges();
    de = fixture.debugElement.query(By.css('H1'));
    el = de.nativeElement;    
    yelpService = fixture.debugElement.injector.get(YelpService);
    //
    linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));
    links = linkDes
    .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  });

  it('should say Challenge Yourself', () => {
    // fixture.detectChanges();
    expect(el.textContent).toEqual('Challenge Yourself');
  });

  it('Should detect the link for paths', () => {
    // expect(links.length).toBe(1, 'should have 1 links');
    // expect(links[0].linkParams).toBe('/paths');
  });

  it('should click GetStarted in the template', () => {
    // const btnGetStartedDe = linkDes[0];
    // const btnGetStarted = links[0];

    // expect(btnGetStarted.navigatedTo).toBeNull('not navigated yet');

    // btnGetStartedDe.triggerEventHandler('click', null);
    // //fixture.detectChanges();
    
    // expect(btnGetStarted.navigatedTo).toBe('/paths');
  });
});