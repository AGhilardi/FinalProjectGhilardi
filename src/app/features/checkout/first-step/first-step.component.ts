import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Game } from 'src/app/core/model/game.interface';
import { selectCart } from 'src/app/redux/cart';
import { removeFromCart, updateTot } from 'src/app/redux/cart/cart.actions';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss']
})
export class FirstStepComponent implements OnInit {
  cart:Game[];
  rand:number[]=[];
  totaltest:number=0;
  
  
  i:number=-1;
  constructor(private store :Store,private router:Router) {
    this.store.pipe(select(selectCart)).subscribe(cart=>this.cart=cart);
    for (const i of this.cart) {
      this.totaltest=this.totaltest+i.price
    }
   }

  ngOnInit(): void {
  }
  removeFromCart(game:Game)
  {
    let id=game.id;
    this.store.dispatch(removeFromCart({id}))
  }
  get total():number{
    return this.totaltest;
  };
  next(){
    let tot=this.totaltest;
    this.store.dispatch(updateTot({tot}));
    this.router.navigateByUrl('/checkout/2')
  }
} 
