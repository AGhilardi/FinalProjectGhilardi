import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { from } from 'rxjs';
import { selectShipping } from 'src/app/redux/shipping';
import { initShipping } from 'src/app/redux/shipping/shipping.action';
import { Shipping} from '../../../core/model/shipping.interface'
@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss']
})
export class SecondStepComponent implements OnInit {
  shippingForm:FormGroup;
  shipping:Shipping;
  constructor(private fb: FormBuilder,private router:Router,private store:Store) {
    this.shippingForm = this.fb.group({
      name: ['', Validators.required],
      surname:['', Validators.required],
      cell: ['', Validators.required],
      city: ['',Validators.required],
      CAP:['', Validators.required],
      adress:['', Validators.required],
      number:['', Validators.required],
      info:[''],
    });
    this.store.pipe(select(selectShipping)).subscribe(shipping=>this.shipping=shipping);
    this.shippingForm.get("name").setValue(this.shipping.name);
    this.shippingForm.get("surname").setValue(this.shipping.surname);
    this.shippingForm.get("cell").setValue(this.shipping.cell);
    this.shippingForm.get("city").setValue(this.shipping.city);
    this.shippingForm.get("CAP").setValue(this.shipping.CAP);
    this.shippingForm.get("adress").setValue(this.shipping.adress);
    this.shippingForm.get("number").setValue(this.shipping.number);
    this.shippingForm.get("info").setValue(this.shipping.info);
   }

  ngOnInit(): void {
  }
  next(){
    let shipping:Shipping=this.shippingForm.value;
    this.store.dispatch(initShipping({shipping}));
    this.router.navigateByUrl("/checkout/3")
  }
}
