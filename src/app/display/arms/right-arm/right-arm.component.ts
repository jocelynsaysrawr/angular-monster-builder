import { Component, OnInit } from "@angular/core";
import { IRightArm } from "../../../models/right-arm.model";
import { Observable } from "rxjs/Observable";
import { RightArmService } from "../../../services/right-arm.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-right-arm",
  template: `<img src="{{armSource$ | async}}">`,
  styleUrls: ["./right-arm.component.scss"]
})
export class RightArmComponent implements OnInit {
  selectedRightArm: IRightArm;
  rightArmSource$: Observable<string>;
  constructor(public RightArmService: RightArmService) {
    this.selectedRightArm = RightArmService.selectedRightArm;
    this.rightArmSource$ = RightArmService.rightArm$.pipe(
      map(value => value.right_arm_src)
    );
  }

  ngOnInit() {}
}
