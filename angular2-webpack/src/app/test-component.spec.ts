import {TestBed, ComponentFixture} from '@angular/core/testing';

import { TestComponent } from './test-component';


describe('TestComponent', () => {

  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let element: any;

    beforeEach(function() {

        // Takes an @NgModule-like metadata object.
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [TestComponent],
            providers: [
                // TestComponent
            ]
        });

        // Closes the current TestBed instance to further configuration.
        // create component and test fixture
        fixture = TestBed.createComponent(TestComponent);
        // get test component from the fixture
        component = fixture.componentInstance;
        element = fixture.nativeElement;

    });


    it('true is true', () => expect(true).toBe(true));
//
//     it('should emit on click', async(() => {
//
//         spyOn(component.myEventEmitter, 'emit');
//         let button = element.querySelector('button');
//         //
//         // console.log("\n\n\n");
//         // console.log(component);
//         // console.log("\n");
//         // console.log(element);
//         // console.log("\n");
//         // console.log(button);
//         // console.log("\n\n\n");
//
//         button.dispatchEvent(new Event('click'));
//
//         fixture.detectChanges();
//
//         expect(component.myEventEmitter.emit).toHaveBeenCalledWith('hello');
//
//     }));
//
//
});
