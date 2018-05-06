import { Component, OnInit } from "@angular/core";
import { IHead } from "../../models/head.model";
import { Observable } from "rxjs/Observable";
import { HeadService } from "../../services/head.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-heads",
  template: `<img src="{{headSource$ | async}}">`
})
export class HeadsComponent implements OnInit {
  selectedHead: IHead;
  headSource$: Observable<string>;
  constructor(public headService: HeadService) {
    this.selectedHead = headService.selectedHead;
    this.headSource$ = headService.head$.pipe(map(value => value.head_src));
  }

  ngOnInit() {}
}
