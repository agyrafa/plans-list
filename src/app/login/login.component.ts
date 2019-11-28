import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../_services/api.service';
import { NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formData = {
    login: '',
    password: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    public apiService: ApiService
  ) {}

  ngOnInit() {}

  onSubmit(loginForm: any) {
    if (loginForm.login && loginForm.password) {
      this.apiService.postLogin(loginForm).subscribe(
        next => {
          this.router.navigate(['/plans']);
        },
        error => {
          alert(error);
        }
      );
    }
  }
}
