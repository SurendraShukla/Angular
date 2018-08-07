import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

import {TestBed, ComponentFixture, async, tick, fakeAsync} from '@angular/core/testing';

import {TwainComponent} from './twain.component';
import {TwainService} from './twain.service';
import Spy = jasmine.Spy;


describe('TwainComponent', () => {

    let comp:    TwainComponent;
    let fixture: ComponentFixture<TwainComponent>;
    let twainEl: DebugElement;
    let twainService: TwainService;
    let spy: Spy;
    let testQuote: any = '...';

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ TwainComponent ],
            providers:    [ TwainService ],
        });

        fixture = TestBed.createComponent(TwainComponent);
        comp    = fixture.componentInstance;

        // TwainService actually injected into the component
        twainService = fixture.debugElement.injector.get(TwainService);

        // Setup spy on the `getQuote` method
        spy = spyOn(twainService, 'getQuote')
            .and.returnValue(Promise.resolve(testQuote));

        // Get the Twain quote element by CSS selector (e.g., by class name)
        twainEl = fixture.debugElement.query(By.css('.twain'));
    });

    function getQuote() { return twainEl.nativeElement.textContent; }

    it('should not show quote before OnInit', () => {
        expect(getQuote()).toBe('', 'nothing displayed');
        expect(spy.calls.any()).toBe(false, 'getQuote not yet called');
    });

    it('should still not show quote after component initialized', () => {
        fixture.detectChanges(); // trigger data binding
        // getQuote service is async => still has not returned with quote
        expect(getQuote()).toBe('...', 'no quote yet');
        expect(spy.calls.any()).toBe(true, 'getQuote called');
    });

    // The async function arranges for the tester's code to run in a special fakeAsync test zone.
    it('should show quote after getQuote promise (async)', async(() => {
        fixture.detectChanges();          // trigger data binding
        fixture.whenStable().then(() => { // wait for async getQuote
            fixture.detectChanges();        // update view with quote
            expect(getQuote()).toBe(testQuote);
        });
    }));

    // The key advantage of fakeAsync is that the test body looks entirely synchronous.
    // There are no promises at all. No then(...) chains to disrupt the visible flow of control.
    // You cannot make an XHR call from within a fakeAsync.
    it('should show quote after getQuote promise (fakeAsync)', fakeAsync(() => {
        fixture.detectChanges(); // trigger data binding
        tick();                  // wait for async getQuote
        fixture.detectChanges(); // update view with quote
        expect(getQuote()).toBe(testQuote);
    }));

    // DISCOURAGED. Traditional Jasmine asynchronous testing technique.
    // Pass 'it" a function that takes a done callback. Now you are responsible for chaining promises,
    // handling errors, and calling done at the appropriate moment.
    it('should show quote after getQuote promise (done)', done => {
        fixture.detectChanges();   // trigger data binding

        // get the spy promise and wait for it to resolve
        spy.calls.mostRecent().returnValue.then(() => {
            fixture.detectChanges(); // update view with quote
            expect(getQuote()).toBe(testQuote);
            done();
        });
    });


});
