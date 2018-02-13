import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Injector, NO_ERRORS_SCHEMA } from '@angular/core';

import { NavbarComponent } from './navbar.component';
import { AuthService } from '../../services/auth.service';

export class authServiceMock{
    handleAuthentication: true;
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

            de = fixture.debugElement.query(By.css('#dropdownBasic1'));
            el = de.nativeElement;
            authService = fixture.debugElement.injector.get(AuthService);
        })
        
        it('should be logged in ', () => {
            
        });

        it('should not be logged in ', () => {
            
        });

        it('should appear profile.nickname ', () => {
            const spyNav = spyOn(authService,'handleAuthentication').and.returnValue(true);
            expect(el.textContent).toContain('');
        });

        it('should not appear profile.nickname ', () => {
            
        });
    });