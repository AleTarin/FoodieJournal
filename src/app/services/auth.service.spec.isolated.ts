import {} from "jasmine"
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/filter';
import { AuthService } from './auth.service';

/* describe('AuthService', () => {
    let authService: AuthService;
    let router;
    let http;
    let mockAuth0;

    beforeEach(() =>{
        router = jasmine.createSpyObj('mockRouter', ['navigate']);
        mockAuth0 = jasmine.createSpyObj('mockAuth0', ['isLoggedInCache', 'logOut', 'isAuthenticated']);
        authService = new AuthService(router, http);
    });

    describe('isLoggedInCache', () =>{
        it('should be in the cache if the isAuthenticated is true', () =>{
            mockAuth0.isAuthenticated.and.returnValue(true);
            console.log(mockAuth0.isAuthenticated);
            router.navigate.and.returnValue('/paths');
            
            expect(mockAuth0.isAuthenticated).toBe(true);
        })
    })
}) */

describe('AuthService', () => {
    let authService: AuthService;
    let router: Router;
    let http;
    let mockAuth0;
    let spy: any;

    beforeEach(() =>{
        authService = new AuthService(router, http);
        console.log(authService);
        spy = spyOn(authService, 'isAuthenticated').and.returnValue(true);
    });

    describe('isLoggedInCache', () =>{
        it('should be in the cache if the isAuthenticated is true', () =>{
            
            expect(authService.isAuthenticated).toBeTruthy();
        })
    });

    describe('isLoggedInCache and navigate to paths' , () =>{
        it('should be paths the redirecting url', () =>{
            spy = spyOn(router,'navigate').and.returnValue('/paths');

            expect(authService.isAuthenticated).toBeTruthy();
            expect(router.navigate).toBe('/paths');

        })
    });
})
