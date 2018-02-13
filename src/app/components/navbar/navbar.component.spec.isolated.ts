import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Injector, NO_ERRORS_SCHEMA } from '@angular/core';

import { NavbarComponent } from './navbar.component';
import { AuthService } from '../../services/auth.service';

export class authServiceMock{

}

describe('NavbarComponent', () => {
      let component: NavbarComponent;
      let fixture: ComponentFixture<NavbarComponent>;
      let de: DebugElement;
      let el: HTMLElement;
      let authService: AuthService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
              declarations: [ NavbarComponent ], 
              providers: [
                   {provide: AuthService, useClass: authServiceMock}
              ]
            })
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(NavbarComponent);
            component = fixture.componentInstance

            de = fixture.debugElement.query(By.css('nav'));
            el = de.;
            authService = fixture.debugElement.injector.get(AuthService);
        })
        
        it('should display original ', () => {
            
        });
    });