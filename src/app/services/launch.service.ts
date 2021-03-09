import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  constructor(private httpclient: HttpClient) { }

  getLaunch(): Observable<Object> {
    return this.httpclient.get(environment.baseURL + '/launches');
  }
}
