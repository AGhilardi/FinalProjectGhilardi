import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Game } from 'src/app/core/model/game.interface';
import { Shipping } from 'src/app/core/model/shipping.interface';
import { selectCart, selectTotal } from 'src/app/redux/cart';
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
  constructor(private store:Store,private router:Router,private fb:FormBuilder) {
    this.store.pipe(select(selectShipping)).subscribe(shipping=>this.shipping=shipping);
    this.store.pipe(select(selectCart)).subscribe(cart=>this.cart=cart);
    this.store.pipe(select(selectTotal)).subscribe(total=>this.total=total);
    this.payForm = this.fb.group({
      card: ['', Validators.required],
      provider:['', Validators.required],
      cardnumber: ['', Validators.required],
      CVV: ['',Validators.required],
    });
   }

  ngOnInit(): void {
  
  }
  next(){
    
  }
}
