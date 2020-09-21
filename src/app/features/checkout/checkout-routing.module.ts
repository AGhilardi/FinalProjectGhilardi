import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstStepComponent} from './first-step/first-step.component';
import {SecondStepComponent} from './second-step/second-step.component';
import { ThirdStepComponent } from './third-step/third-step.component';
const routes: Routes = [
  {  path: '', component: FirstStepComponent},
    {path: 'checkout', component: FirstStepComponent},
    {path: '2', component: SecondStepComponent},
    {path: '3', component: ThirdStepComponent},
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }