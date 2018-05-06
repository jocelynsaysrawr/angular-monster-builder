import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IArm } from '../models/arm.model';
import { Observable } from 'rxjs/Observable';
import { map, filter, tap } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ArmService {
  constructor(private http: HttpClient) {
    this.http.get<IArm[]>(this._url).subscribe(value => {
      this.allArms = value;
      this.selectArm(1);
    });
  }

  _url: string = 'http://localhost:3000/arm';
  allArms: IArm[];

  armSource = new BehaviorSubject<any>('');
  arm$ = this.armSource.asObservable();

  selectedArm: IArm;

  getAllArms(): Observable<IArm[]> {
    return this.http.get<IArm[]>(this._url).catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    console.log('error is here');
    return Observable.throw(error.message || 'Server Error');
  }

  selectArm(armID) {
    this.selectedArm = this.allArms.filter(
      arm => arm.arm_id === Number(armID)
    )[0];
    this.armSource.next(this.selectedArm);
  }
}
