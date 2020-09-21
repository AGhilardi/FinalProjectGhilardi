import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstStepComponent} from './first-step/first-step.component';
import {SecondStepComponent} from './second-step/second-step.component';
const routes: Routes = [
  {  path: '', component: FirstStepComponent},
    {path: 'checkout/1', component: FirstStepComponent},
    {path: 'checkout/2', component: SecondStepComponent},
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }