import {Component, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

import {TestBed, ComponentFixture, async} from '@angular/core/testing';

import {Hero} from '../model/hero';
import {DashboardHeroComponent} from './dashboard-hero.component';


describe('DashboardHeroAsHostComponent', () => {

    let fixture: ComponentFixture<TestHostComponent>;
    let heroEl: DebugElement;
    let testHost: TestHostComponent;

    @Component({
        template: `
    <dashboard-hero  [hero]="hero"  (selected)="onSelected($event)">
    </dashboard-hero>`
    })
    class TestHostComponent {
        hero = new Hero(42, 'Test Name');
        selectedHero: Hero;
        onSelected(hero: Hero) { this.selectedHero = hero; }
    }

    beforeEach( async(() => {
        TestBed.configureTestingModule({
            declarations: [ DashboardHeroComponent, TestHostComponent ], // declare both
        }).compileComponents();
    }));

    beforeEach(() => {
        // create TestHosComponent instead of DashboardHeroComponent
        fixture  = TestBed.createComponent(TestHostComponent);
        testHost = fixture.componentInstance;
        heroEl   = fixture.debugElement.query(By.css('.hero')); // find hero
        fixture.detectChanges(); // trigger initial data binding
    });

    it('should display hero name', () => {
        const expectedPipedName = testHost.hero.name.toUpperCase();
        expect(heroEl.nativeElement.textContent).toContain(expectedPipedName);
    });

    it('should raise selected event when clicked', () => {
        heroEl.triggerEventHandler('click', null);
        // selected hero should be the same data bound hero
        expect(testHost.selectedHero).toBe(testHost.hero);
    });

});
