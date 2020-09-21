import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { from } from 'rxjs';
import { initShipping } from 'src/app/redux/shipping/shipping.action';
import { Shipping} from '../../../core/model/shipping.interface'
@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss']
})
export class SecondStepComponent implements OnInit {
  shippingForm:FormGroup;
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
   }

  ngOnInit(): void {
  }
  next(){
    let shipping:Shipping=this.shippingForm.value;
    this.store.dispatch(initShipping({shipping}));
    this.router.navigateByUrl("/checkout/3")
  }
}
