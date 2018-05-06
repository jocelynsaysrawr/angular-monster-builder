import { Component, OnInit } from '@angular/core';
import { IBody } from '../../models/body.model';
import { Observable } from 'rxjs/Observable';
import { BodyService } from '../../services/body.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-bodys',
  template: `<img src="{{bodySource$ | async}}">`,
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  selectedBody: IBody;
  bodySource$: Observable<string>;
  constructor(public BodyService: BodyService) {
    this.selectedBody = BodyService.selectedBody;
    this.bodySource$ = BodyService.body$.pipe(map(value => value.body_src));
  }

  ngOnInit() {}
}
