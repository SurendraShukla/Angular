import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'my-team-member',
  // template: '<h1>Displaying team members</h1>',
  templateUrl: './team-member.component.html'
})
export class TeamMemberComponent {

  @Input() teamDetail: number;
  @Input() msg;

  @Output() customEvent = new EventEmitter();

  constructor() {
    // setInterval(() => this.customEvent.emit(new Date().toTimeString()), 1000);
  }

  passTeamMemberName(teamMemberName) {
    this.customEvent.emit(teamMemberName);
  }

  printSomething(val) {
    return val;
  }

}
