import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { HttpCommunicationsService } from 'src/app/core/http-communications/http-communications.service';
import { Game } from 'src/app/core/model/game.interface';
import { Shipping } from 'src/app/core/model/shipping.interface';
import { User } from 'src/app/core/model/user.interface';
import { selectCart, selectTotal } from 'src/app/redux/cart';
import { getCurrentUser, selectUsersState } from 'src/app/redux/users';
import { selectShipping } from "../../../redux/shipping/index";
@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.scss']
})
export class ThirdStepComponent implements OnInit {
  shipping:Shipping;
  cart:Game[];
  total:number;
  payForm:FormGroup;
  user:User;
  constructor(private store:Store,private router:Router,private fb:FormBuilder,private http:HttpCommunicationsService) {
    this.store.pipe(select(selectShipping)).subscribe(shipping=>this.shipping=shipping);
    this.store.pipe(select(selectCart)).subscribe(cart=>this.cart=cart);
    this.store.pipe(select(selectTotal)).subscribe(total=>this.total=total);
    this.store.pipe(select(getCurrentUser)).subscribe(user=>this.user=user)
    this.payForm = this.fb.group({
      card: ['', Validators.required],
      provider:['', Validators.required],
      cardnumber: ['', [Validators.minLength(12),Validators.required]],
      CVV: ['',Validators.required],
    });
   }

  ngOnInit(): void {
  
  }
  next(){
    alert("checkout successful");
    const msg = "test";
    let email = this.payForm.value;
    Object.defineProperty(email,"items",{value:this.cart.length.toString});
    Object.defineProperty(email,"mAhNeY",{value:this.total.toString});
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.sendOrderMail('https://formspree.io/mrgoglrj',{name:this.shipping.name,replyto:'ale.ghilo@gmail.com', message:email},
    {'headers':headers}).subscribe(resp=>{console.log(resp)});
    this.router.navigateByUrl("/home");
  }
}
