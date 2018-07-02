import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GetPhysicalPersonService {

  constructor(private http: HttpClient) { }

  public load(): Observable<any> {
    return this.http.get('/assets/D63226655T.json');
  }
}
