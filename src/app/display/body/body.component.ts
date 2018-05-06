import { Component, OnInit } from "@angular/core";
import { BodyService } from "../../body.service";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";

@Component({
  selector: "app-body",
  template: `<img src="{{ imageSrc$ | async }}" alt="">`,
  styleUrls: ["./body.component.scss"]
})
export class BodyComponent implements OnInit {
  currentBody: Object;
  imageSrc$: Observable<string>;

  constructor(public bodyService: BodyService) {
    this.currentBody = bodyService.currentBody;
    this.imageSrc$ = bodyService.body$.pipe(map(value => value.imageSrc));
  }

  ngOnInit() {}
}
