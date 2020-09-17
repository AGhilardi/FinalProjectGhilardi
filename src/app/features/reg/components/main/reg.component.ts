import { formatCurrency } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/core/model/user.interface';
import { RegService } from '../../services/reg.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {
  loginForm: FormGroup;
  signUp: boolean = false;
  button:string;
   regUser:User
  constructor(fb: FormBuilder, private regservice: RegService,) {
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

  doSignUp(){
    if (this.loginForm.valid){
    this.regUser = this.loginForm.value;
    console.log(this.regUser);
  
  this.regservice.executeSignUp(this.regUser);}
  else{
    alert ("reg invalida")
  }
  }
}