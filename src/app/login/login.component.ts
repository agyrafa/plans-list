import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient) { }


  ngOnInit() {
    let hero = 'Windstorm';

  }

  onSubmit(event, loginForm: NgForm) {
    event.preventDefault();
    console.log('a');
  }
}
