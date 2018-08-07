import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

import {TestBed, ComponentFixture} from '@angular/core/testing';

import {UserService} from './model/user.service';
import {WelcomeComponent} from './welcome.component';


describe('WelcomeComponent', () => {

    let comp:    WelcomeComponent;
    let fixture: ComponentFixture<WelcomeComponent>;
    let welcomeEl: DebugElement;
    let userService: UserService;

    beforeEach(() => {
        // fake UserService for test purposes
        const fakeUserService = {
            isLoggedIn: true,
            user: { name: 'Test User'}
        };

        TestBed.configureTestingModule({
            declarations: [ WelcomeComponent ],
            providers:    [ {provide: UserService, useValue: fakeUserService } ]
        });

        fixture = TestBed.createComponent(WelcomeComponent);
        comp    = fixture.componentInstance;

        // UserService actually injected into the component
        userService = fixture.debugElement.injector.get(UserService);

        //  get the 'welcome" element by CSS selector (e.g., by class name)
        welcomeEl = fixture.debugElement.query(By.css('.welcome'));
    });

    it('should welcome the user', () => {
        fixture.detectChanges(); // trigger data binding

        let content = welcomeEl.nativeElement.textContent;
        expect(content).toContain('Welcome', '"Welcome ..."');
        expect(content).toContain('Test User', 'expected name');
    });

    it('should welcome "Bubba"', () => {
        userService.user.name = 'Bubba'; // welcome message hasn't been shown yet

        fixture.detectChanges(); // trigger data binding

        let content = welcomeEl.nativeElement.textContent;
        expect(content).toContain('Bubba');
    });

    it('should request login if not logged in', () => {
        userService.isLoggedIn = false; // welcome message hasn't been shown yet

        fixture.detectChanges(); // trigger data binding

        let content = welcomeEl.nativeElement.textContent;
        expect(content).not.toContain('Welcome', 'not welcomed');
        expect(content).toMatch(/log in/i, '"log in"');
    });


});
