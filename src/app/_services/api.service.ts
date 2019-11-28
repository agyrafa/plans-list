import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  baseUrl = "http://demo1114440.mockable.io";

  constructor(private http: HttpClient) {}

  public postLogin(form: any): Observable<any> {
    return this.http.post(this.baseUrl + "/login", {
      login: form.login,
      password: form.password
    });
  }

  public getPlans(): Observable<any> {
    return this.http.get(this.baseUrl + "/plans");
  }
}
