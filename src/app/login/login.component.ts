import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formData = {
    'login' : '',
    'password': ''
  };

  constructor(
    private http:HttpClient,
    private router: Router,
    public apiService: ApiService
  ) { }

  ngOnInit() {
    let hero = 'Windstorm';
  }

  onSubmit(loginForm: NgForm) {
    console.log(loginForm);
    // event.preventDefault();
    console.log('a');

    this.apiService.postLogin(loginForm).subscribe(res => {
      console.log(res)
      this.router.navigateByUrl('/plans');
    });
  }
}
