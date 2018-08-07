import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TeamMemberComponent } from '../team-member/team-member.component';

@Component({
  selector: 'my-dap-team',
  templateUrl: './dap-team.component.html'
})
export class DapTeamComponent implements OnInit, AfterViewInit {

  @ViewChild(TeamMemberComponent)
  private teamMemberComponent: TeamMemberComponent;

  selectedIndex: number;
  dapTeamDetail = [{'name': 'OOS',
    'teamDetail' : [{'name': 'Parag', 'gender': 'M'},
      {'name': 'Surendra', 'gender': 'M'},
      {'name': 'Gampesh', 'gender': 'M'},
      {'name': 'Alok', 'gender': 'M'}
    ]
  },
    {'name': 'Channel',
      'teamDetail' : [{'name': 'Rashmi', 'gender': 'F'},
        {'name': 'Shruti', 'gender': 'F'},
        {'name': 'Ankit', 'gender': 'M'},
        {'name': 'Neel', 'gender': 'M'},
        {'name': 'Deepesh', 'gender': 'M'},
        {'name': 'Rohit', 'gender': 'M'},
        {'name': 'Vijay', 'gender': 'M'}
      ]
    },
    {'name': 'Optimization',
      'teamDetail' : [{'name': 'Supriya', 'gender': 'F'},
        {'name': 'Manas', 'gender': 'M'},
        {'name': 'Kevendra', 'gender': 'M'},
        {'name': 'Sheen', 'gender': 'F'},
        {'name': 'Ashish', 'gender': 'M'}
      ]
    },
    {'name': 'Cerium',
      'teamDetail' : [{'name': 'Ashutosh', 'gender': 'M'},
        {'name': 'Nilesh', 'gender': 'M'},
        {'name': 'Bhagyashree', 'gender': 'F'},
        {'name': 'Amresh', 'gender': 'M'},
        {'name': 'Monkia', 'gender': 'F'},
        {'name': 'Deepak', 'gender': 'M'}
      ]
    },
    {'name': 'Addmission',
      'teamDetail' : [{'name': 'Sapan', 'gender': 'M'}]
    }
  ];

  constructor() {
    // console.log(this.teamMemberComponent.printSomething('Using ViewChild') + '-' + this.teamMemberComponent.msg);
  }

  ngOnInit() {
    // console.log(this.teamMemberComponent.printSomething('Using ViewChild') + '-' + this.teamMemberComponent.msg);
  }

  ngAfterViewInit() {
    console.log(this.teamMemberComponent.printSomething('Using ViewChild') + '-' + this.teamMemberComponent.msg);
  }

  setSelectedIndex(index: number) {
    this.selectedIndex = index;
  }

  printTeamMemberName(name: string) {
    console.log('Printing in parent :' + name);
  }
}
