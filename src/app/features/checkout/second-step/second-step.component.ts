import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss']
})
export class SecondStepComponent implements OnInit {
  shippingForm:FormGroup;
  constructor(private fb: FormBuilder,private router:Router) {
    this.shippingForm = this.fb.group({
      name: ['', Validators.required],
      surname:['', Validators.required],
      cell: ['', Validators.required],
      city: ['',Validators.required],
      CAP:['', Validators.required],
      adress:['', Validators.required],
      number:['', Validators.required],
      info:['', Validators.required],
    });
   }

  ngOnInit(): void {
  }
  next(){
    this.router.navigateByUrl("checkout/3")
  }
}
