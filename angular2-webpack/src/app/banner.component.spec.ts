import { DebugElement }    from '@angular/core';
import { By }              from '@angular/platform-browser';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {

    let comp:    BannerComponent;
    let fixture: ComponentFixture<BannerComponent>;
    let el:      DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ BannerComponent ], // declare the test component

            // To run run change detection automatically
            // { provide: ComponentFixtureAutoDetect, useValue: true }
        });

        fixture = TestBed.createComponent(BannerComponent);

        comp = fixture.componentInstance; // BannerComponent test instance

        // get title DebugElement by element name
        el = fixture.debugElement.query(By.css('h1'));
    });


    // The TestBed.createComponent does not trigger change detection.
    // The fixture does not automatically push the component's title property value into the data bound element
    // This behavior (or lack of it) is intentional
    //  It gives the tester an opportunity to investigate the state of the component before Angular initiates data binding
    // or calls lifecycle hooks.
    it('no title in the DOM until manually call `detectChanges`', () => {
        expect(el.nativeElement.textContent).toEqual('');
    });

    it('should display original title', () => {
        fixture.detectChanges(); // trigger data binding
        expect(el.nativeElement.textContent).toContain(comp.title);
    });

    it('should display a different test title', () => {
        comp.title = 'Test Title';

        // trigger data binding to update the view
        // Trigger change detection
        fixture.detectChanges();
        expect(el.nativeElement.textContent).toContain('Test Title');
    });


});
