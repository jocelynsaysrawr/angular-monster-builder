import { Component, OnInit } from '@angular/core';
import { IArm } from '../../../models/arm.model';
import { Observable } from 'rxjs/Observable';
import { ArmService } from '../../../services/arm.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-left-arm',
  template: `<img src="{{armSource$ | async}}">`,
  styleUrls: ['./left-arm.component.scss']
})
export class LeftArmComponent implements OnInit {
  selectedArm: IArm;
  armSource$: Observable<string>;
  constructor(public ArmService: ArmService) {
    this.selectedArm = ArmService.selectedArm;
    this.armSource$ = ArmService.arm$.pipe(map(value => value.arm_src));
  }

  ngOnInit() {}
}
