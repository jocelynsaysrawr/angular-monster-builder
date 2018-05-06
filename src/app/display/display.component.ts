import { Component, OnInit } from '@angular/core';
import { IHead } from '../models/head.model';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  selectedArms: Object;
  constructor() {}

  ngOnInit() {}
}
