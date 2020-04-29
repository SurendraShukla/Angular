import { sandboxOf } from 'angular-playground';
import { NoticeComponent } from './notice.component';

export default sandboxOf(NoticeComponent)
  .add('default', {
    template: `<app-notice></app-notice>`
  });
