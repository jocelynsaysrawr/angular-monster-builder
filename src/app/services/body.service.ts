import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IBody } from '../models/body.model';
import { Observable } from 'rxjs/Observable';
import { map, filter, tap } from 'rxjs/operators';
import { dbUrl } from './url/databaseURL';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class BodyService {
  constructor(private http: HttpClient) {
    this.http.get<IBody[]>(this._url).subscribe(value => {
      this.allBodys = value;
      this.selectBody(1);
    });
  }

  _url: string = `${dbUrl}/body`;
  allBodys: IBody[];

  bodySource = new BehaviorSubject<any>('');
  body$ = this.bodySource.asObservable();

  selectedBody: IBody;

  getAllBodys(): Observable<IBody[]> {
    return this.http.get<IBody[]>(this._url).catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error');
  }

  selectBody(headID) {
    this.selectedBody = this.allBodys.filter(
      body => body.body_id === Number(headID)
    )[0];
    this.bodySource.next(this.selectedBody);
  }
}
