import { sandboxOf } from 'angular-playground';
import { HomeComponent } from './home.component';

export default sandboxOf(HomeComponent)
  .add('default', {
    template: `<app-home></app-home>`
  });
