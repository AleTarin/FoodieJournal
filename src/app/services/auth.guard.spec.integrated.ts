
import { ComponentFixture, TestBed } from '@angular/core/testing';


import {Component} from "@angular/core";
// import { BrowserDynamicTestingModule, platformBrowserDynamicTesting 
// } from '@angular/platform-browser-dynamic/testing';


// import {RouterTestingModule} from "@angular/router/testing";
// import {Router, RouterModule, Routes} from "@angular/router";

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from '../components/home/home.component';
import { AppComponent } from '../../app/app.component'

@Component({ template: '<h1>H</h1>' })
export class TestComponent {}

class MockRouter {
    navigate(url: string) { return url; }
}

// export const routes: Routes = [
//     {path: '', redirectTo: 'home', pathMatch: 'full'},
//     {path: 'home', component: HomeComponent}
//     ];

    describe('AppComponent', () => {
        let component: TestComponent;
        let fixture: ComponentFixture<TestComponent>;
    
        beforeEach(() => {
            TestBed.configureTestingModule({
                // imports: [],
                declarations: [TestComponent]
                // providers: [
                //     {provide: Router, useClass: MockRouter}
                // ], 
                // schemas: []
            }).compileComponents();
            fixture = TestBed.createComponent(TestComponent);

            component = fixture.componentInstance;
            fixture.detectChanges();
        });

            it('should ...', () => {
               
            });
    });