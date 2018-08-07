import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';

import { Hero }              from '../model';
import { HeroDetailService } from './hero-detail.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: '/hero-detail.component.html',
  styleUrls:   [
    '../shared/styles.css',
    '/hero-detail.component.css'
  ],
  providers:  [ HeroDetailService ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private heroDetailService: HeroDetailService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];

    // tslint:disable-next-line:triple-equals
    if (id == undefined) {
      // no id; act as if is new
      this.hero = new Hero();
    } else {
      this.heroDetailService.getHero(id).then(hero => {
        if (hero) {
          this.hero = hero;
        } else {
          this.gotoList(); // id not found; navigate to list
        }
      });
    }
  }

  save() {
    this.heroDetailService.saveHero(this.hero).then(() => this.gotoList());
  }

  cancel() { this.gotoList(); }

  gotoList() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
