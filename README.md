### Angular Testing Tips

```
// Setup
beforeEach(() => {
  let httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

  TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent],
    providers: [ApiService, provideRoutes([])]
  });

  // Create component and test fixture
  fixture = TestBed.createComponent(WelcomeComponent);
  // Get test component from the fixture, to access properties and methods
  comp    = fixture.componentInstance;
  // To access DOM element
  element = fixture.nativeElement; 
  // Test helper
  de = fixture.debugElement;

  // To get service object
  service = TestBed.get(ValueService);
  TestBed.get(Router).navigate(['/home']);


  // UserService actually injected into the component
  userService = fixture.debugElement.injector.get(UserService);

  // Get the 'welcome' element by CSS selector (e.g., by class name)
  welcomeEl = fixture.debugElement.query(By.css('.welcome'));

}

it('should welcome the user', () => {
  fixture.detectChanges(); // trigger data binding

  let content = welcomeEl.nativeElement.textContent;
  expect(content).toContain('Welcome', '"Welcome ..."');
  expect(content).toContain('Test User', 'expected name');
});

it('should have an url', () => {
  let fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  expect(fixture.debugElement.componentInstance.url).toEqual('https://github.com/preboot/angular2-webpack');
});
```
