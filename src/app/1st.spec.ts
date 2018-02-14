import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Component} from '@angular/core';

@Component({ template: '<h1>H</h1>' })
export class TestComponent {}

class MockRouter {
    navigate(url: string) { return url; }
}

    describe('AppComponent', () => {
        let component: TestComponent;
        let fixture: ComponentFixture<TestComponent>;
        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [TestComponent]
            }).compileComponents();
            fixture = TestBed.createComponent(TestComponent);

            component = fixture.componentInstance;
            fixture.detectChanges();
        });

            // it('should ...', () => {
            // });
    });
