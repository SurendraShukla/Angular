import { RouterModule }  from '@angular/router';

import { WelcomeComponent } from './welcome.component';

export const routing = RouterModule.forChild([
    { path: 'welcome', component: WelcomeComponent}
]);
