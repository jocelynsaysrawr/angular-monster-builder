import { Component, OnInit } from '@angular/core';
import { ILeg } from '../../models/leg.model';
import { Observable } from 'rxjs/Observable';
import { LegService } from '../../services/leg.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-legs',
  template: `<img src="{{legSource$ | async}}">`,
  styleUrls: ['./legs.component.scss']
})
export class LegsComponent implements OnInit {
  selectedArms: Object;
  selectedLeg: ILeg;
  legSource$: Observable<string>;
  constructor(public legService: LegService) {
    this.selectedLeg = legService.selectedLeg;
    this.legSource$ = legService.leg$.pipe(map(value => value.leg_src));
  }

  ngOnInit() {}
}
