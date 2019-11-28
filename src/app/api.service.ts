import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public postLogin(form:any):Observable<any> {

    return this.http.post('http://demo1114440.mockable.io/login', {
      login: form.login,
      password: form.password
    });
  }

}
