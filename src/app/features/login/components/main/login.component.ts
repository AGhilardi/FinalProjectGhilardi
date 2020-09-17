import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/core/model/user.interface';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  regUser:User;
  constructor(fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = fb.group({
      username: ['', [Validators.required,Validators.minLength(3)]],
      password: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['',[Validators.required,Validators.email]]
    })
  }
  
  ngOnInit(): void {
  }

  doLogin() {
    
    this.loginService.executeLogin(this.loginForm.get('username').value,this.loginForm.get('password').value);
  }
  }
