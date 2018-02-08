<<<<<<< HEAD
import 'rxjs/add/operator/filter';
import { AuthService } from './auth.service';

describe('AuthService', () => {
    let authService: AuthService;
    let router;
=======
import {} from "jasmine"

import 'rxjs/add/operator/filter';
import { AuthService } from './auth.service';

/* describe('AuthService', () => {
    let authService: AuthService;
    let router;
    let http;
>>>>>>> 7711c348b74739316fd4dbb6b7e4be68d22b3c9e
    let mockAuth0;

    beforeEach(() =>{
        router = jasmine.createSpyObj('mockRouter', ['navigate']);
<<<<<<< HEAD
        const mockAuth0 =  {
            isAuthenticated(): { true }
        };
        spyOn('isAuthenticated')
        authService = new AuthService(router);
=======
        mockAuth0 = jasmine.createSpyObj('mockAuth0', ['isLoggedInCache', 'logOut', 'isAuthenticated']);
        authService = new AuthService(router, http);
>>>>>>> 7711c348b74739316fd4dbb6b7e4be68d22b3c9e
    });

    describe('isLoggedInCache', () =>{
        it('should be in the cache if the isAuthenticated is true', () =>{
            mockAuth0.isAuthenticated.and.returnValue(true);
            console.log(mockAuth0.isAuthenticated);
            router.navigate.and.returnValue('/paths');
            
            expect(mockAuth0.isAuthenticated).toBe(true);
        })
    })
<<<<<<< HEAD
})
=======
}) */
>>>>>>> 7711c348b74739316fd4dbb6b7e4be68d22b3c9e
