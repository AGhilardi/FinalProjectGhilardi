import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstStepComponent } from './first-step/first-step.component';
import {CheckoutRoutingModule} from './checkout-routing.module';
import { SecondStepComponent } from './second-step/second-step.component'
import { SharedModule } from 'src/app/shared/shared.module';
import { ThirdStepComponent } from './third-step/third-step.component';


@NgModule({
  declarations: [FirstStepComponent, SecondStepComponent, SecondStepComponent, ThirdStepComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    SharedModule
  ]
})
export class CheckoutModule { }
