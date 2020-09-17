import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from '../../features/home/components/main/home.component'
import {  CustomizeFormComponent} from "../../shared/customize-form/customize-form.component";

const routes: Routes = [{
  path: '', component: HomeComponent, children: [
    {path: 'edit/:id', component: CustomizeFormComponent},
  ]
};

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }