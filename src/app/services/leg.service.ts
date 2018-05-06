import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ILeg } from '../models/leg.model';
import { Observable } from 'rxjs/Observable';
import { map, filter, tap } from 'rxjs/operators';
import { dbUrl } from './url/databaseURL';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LegService {
  constructor(private http: HttpClient) {
    this.http.get<ILeg[]>(this._url).subscribe(value => {
      this.allLegs = value;
      this.selectLeg(1);
    });
  }

  _url: string = `${dbUrl}/leg`;
  allLegs: ILeg[];

  legSource = new BehaviorSubject<any>('');
  leg$ = this.legSource.asObservable();

  selectedLeg: ILeg;

  getAllLegs(): Observable<ILeg[]> {
    return this.http.get<ILeg[]>(this._url).catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error');
  }

  selectLeg(legID) {
    this.selectedLeg = this.allLegs.filter(
      leg => leg.leg_id === Number(legID)
    )[0];
    this.legSource.next(this.selectedLeg);
  }
}
