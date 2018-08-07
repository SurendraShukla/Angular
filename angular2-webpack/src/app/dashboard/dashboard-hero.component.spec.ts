import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

import {TestBed, ComponentFixture, async} from '@angular/core/testing';

import {DashboardHeroComponent} from './dashboard-hero.component';
import {Hero} from '../model/hero';


describe('DashboardHeroComponent', () => {

    let fixture: ComponentFixture<DashboardHeroComponent>;
    let comp: DashboardHeroComponent;
    let heroEl: DebugElement;
    let expectedHero: Hero;

    // The async function arranges for the tester's code to run in a special async test zone
    // that hides the mechanics of asynchronous execution.
    beforeEach( async(() => {
        TestBed.configureTestingModule({
            declarations: [ DashboardHeroComponent ],
        })
        // WebPack developers need not call compileComponents because it inlines templates and
        // css as part of the automated build process that precedes running the test.
        // The compileComponents method returns a promise so you can perform additional tasks after it finishes.
        // Closes the current TestBed instance to further configuration.
        .compileComponents(); // compile template and css

    }));

    // synchronous beforeEach
    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardHeroComponent);
        comp    = fixture.componentInstance;
        heroEl  = fixture.debugElement.query(By.css('.hero')); // find hero element

        // pretend that it was wired to something that supplied a hero
        expectedHero = new Hero(42, 'Test Name');
        comp.hero = expectedHero;
        fixture.detectChanges(); // trigger initial data binding
    });

    it('should display hero name', () => {
        const expectedPipedName = expectedHero.name.toUpperCase();
        expect(heroEl.nativeElement.textContent).toContain(expectedPipedName);
    });

    it('should raise selected event when clicked', () => {
        let selectedHero: Hero;
        comp.selected.subscribe((hero: Hero) => selectedHero = hero);

        heroEl.triggerEventHandler('click', null);
        expect(selectedHero).toBe(expectedHero);
    });

});
