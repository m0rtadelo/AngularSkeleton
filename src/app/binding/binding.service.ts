import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BindingService {
  model: string;

  constructor() {}

  getValue(): Observable<string> {
    //return of(this.model);
    return Observable.create(observer => {
      observer.subscribe(result => {

      })
    });
  }
}
