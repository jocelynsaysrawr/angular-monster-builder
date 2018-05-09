import { Component, OnInit } from "@angular/core";
import { ILeftArm } from "../../../models/left-arm.model";
import { Observable } from "rxjs/Observable";
import { LeftArmService } from "../../../services/left-arm.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-left-arm",
  template: `<img src="{{leftArmSource$ | async}}" appMoveable>`,
  styleUrls: ["./left-arm.component.scss"]
})
export class LeftArmComponent implements OnInit {
  selectedLeftArm: ILeftArm;
  leftArmSource$: Observable<string>;
  constructor(public LeftArmService: LeftArmService) {
    this.selectedLeftArm = LeftArmService.selectedLeftArm;
    this.leftArmSource$ = LeftArmService.leftArm$.pipe(
      map(value => value.left_arm_src)
    );
  }

  ngOnInit() {}
}
