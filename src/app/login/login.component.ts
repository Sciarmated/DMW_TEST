import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormGroupDirective } from '@angular/forms'
// import { AuthService } from '../auth.service'
// import { AccountService, } from '';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor() {}

   ngOnInit() {
   }
  }
