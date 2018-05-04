import { Component, OnInit } from "@angular/core";
import { HeadService } from "../head.service";
import { SelectService } from "../select.service";
import { IHead } from "../models/head.model";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.scss"]
})
export class DisplayComponent implements OnInit {
  selectedHead: IHead;
  headSource$: Observable<string>;
  constructor(public _headService: HeadService) {
    this.headSource$ = _headService.head$.pipe(map(value => value.head_src));
  }

  ngOnInit() {}
}
