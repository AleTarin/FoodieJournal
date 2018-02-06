import 'rxjs/add/operator/filter';
import { AuthService } from './auth.service';

describe('AuthService', () => {
    let authService: AuthService;
    let router;
    let mockAuth0;

    beforeEach(() =>{
        router = jasmine.createSpyObj('mockRouter', ['navigate']);
        const mockAuth0 =  {
            isAuthenticated(): { true }
        };
        spyOn('isAuthenticated')
        authService = new AuthService(router);
    });

    describe('isLoggedInCache', () =>{
        it('should be in the cache if the isAuthenticated is true', () =>{
            mockAuth0.isAuthenticated.and.returnValue(true);
            console.log(mockAuth0.isAuthenticated);
            router.navigate.and.returnValue('/paths');
            
            expect(mockAuth0.isAuthenticated).toBe(true);
        })
    })
})