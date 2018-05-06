import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LegsService } from '../../legs.service';
import { map } from 'rxjs/operators';
import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-legs',
  template: `
  <div align="center">
    <img src="{{ legs_source$ | async }}" [@legsAnimation]="state" (click)="animateMe()">
  </div>
  `,
  styleUrls: ['./legs.component.scss'],
  animations: [
    trigger('legsAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.1)',
      }))
      ,
      transition('small <=> large', animate('1000ms ease-in', keyframes([
        style({ opacity: 0, transform: 'translateY(400%)', offset: 0 }),
        style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.5 }),
        style({ opacity: 1, transform: 'translateY(20px)', offset: 1 })
      ])))

    ])
  ]

})


export class LegsComponent implements OnInit {
  currentLegs: Object;
  legs_source$: Observable<string>;
  state: string = 'small';

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }


  constructor(public legsService: LegsService) {
    this.currentLegs = legsService.currentLegs;
    this.legs_source$ = legsService.legs$.pipe(map(value => value.legs_source));
  }

  ngOnInit() {
  }


}
