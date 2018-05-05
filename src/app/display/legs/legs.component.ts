import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LegsService } from '../../legs.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-legs',
  template: `
    <img src="{{ legs_source$ | async }}">
  `,
  styleUrls: ['./legs.component.scss']
})
export class LegsComponent implements OnInit {
  currentLegs: Object;
  legs_source$: Observable<string>;



  constructor(public legsService: LegsService) {
    this.currentLegs = legsService.currentLegs;
    this.legs_source$ = legsService.legs$.pipe(map(value => value.legs_source));
  }

  ngOnInit() {
  }


}
