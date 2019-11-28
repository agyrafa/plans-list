import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './login/login.component.html',
  styleUrls: ['./login/login.component.scss']
})
export class AppComponent {
  title = 'app';

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
  }

  onSubmit(loginForm: NgForm) {
    this.apiService.postLogin(loginForm).subscribe(res => {
      console.log(res)
      this.router.navigate(['plans']);
      // this.router.navigate(['/article/', articleId]);
    });
  }
}
