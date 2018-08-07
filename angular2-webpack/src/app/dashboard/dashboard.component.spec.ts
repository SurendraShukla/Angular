import {Router} from '@angular/router';

import {TestBed, inject, ComponentFixture, async} from '@angular/core/testing';

import {HeroService} from '../model/hero.service';
import {DashboardComponent} from './dashboard.component';
import {FakeHeroService, HEROES} from '../model/testing/fake-hero.service';

class FakeRouter {
    navigateByUrl(url: string) { return url;  }
}

fdescribe('Dashboard', () => {

    let fixture: ComponentFixture<DashboardComponent>;
    let comp: DashboardComponent;

    beforeEach( async(() => {
        TestBed.configureTestingModule({
          declarations: [DashboardComponent],
            providers: [
                {provide: HeroService, useClass: FakeHeroService},
                {provide: Router, useClass: FakeRouter}
            ]
        }).compileComponents().then(() => {
          fixture = TestBed.createComponent(DashboardComponent);
          comp = fixture.componentInstance;

          comp.heroes = HEROES;
        });

    }));

    // Do not configure the TestBed after calling inject.
    it('should tell ROUTER to navigate when hero clicked', inject([Router], (router: Router) => {

        const spy = spyOn(router, 'navigateByUrl');
        // heroClick(); // trigger click on first inner <div class="hero">

        // args passed to router.navigateByUrl()
        const navArgs = spy.calls.first().args[0];

        // expecting to navigate to id of the component's first hero
        const id = comp.heroes[0].id;
        expect(navArgs).toBe('/heroes/' + id, 'should nav to HeroDetail for first hero');
    }));
});
