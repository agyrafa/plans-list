import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // const localUrl = 'assets/data/smartphone.json';

  postLogin(form):Observable<Object> {

    return this.http.post('http://demo1114440.mockable.io/login', {
      login: form.login,
      password: form.password
    });
  }

}
