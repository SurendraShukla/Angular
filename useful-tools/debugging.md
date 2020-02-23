## Debugging Angular Applications

### Chrome DevTools

Using Chrome, open the Developer Tools. In the Sources tab, look for the `webpack://` source. Your application should be under the folder `./`. Set your breakpoints like normal within your application.

> Debugging with Chrome Dev Tools
> ![Chrome Debugging](images/chrome-debugging.png)
>
> Debugging with Firefox Dev Tools
> ![Firefox Debugging](images/firefox-debugging.png)

### IntelliJ Debugger

In IntelliJ, go to your `Run/Debug Configurations`. Add a new `JavaScript Debug` configuration, with the url set to your application's URL.

![IntelliJ Configuration](images/intellij-debug-config.png)

Now you can set your breakpoints in IntelliJ like normal. Then launch the Debug configuration you just created. It should open your browser and navigate to the URL you set. When a breakpoint is reached, chrome will pause and IntelliJ should gain focus.

![IntelliJ Debugging](images/intellij-debugging.png)

### Debugging Angular apps created with Angular CLI in intellij
* App is started by Angular CLI Server
* Launch Debug Angular Application
* Debug your application
![Debugging Angular](https://blog.jetbrains.com/webstorm/2017/01/debugging-angular-apps/?_ga=2.251318150.1007363091.1582429132-1336078692.1581532180)
