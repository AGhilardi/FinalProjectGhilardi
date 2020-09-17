import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomizeFormComponent } from 'src/app/shared/customize-form/customize-form.component';
import { HomeComponent } from './components/main/home.component';

const routes: Routes = [
  {  path: '', component: HomeComponent},
    {path: 'edit/:id', component: CustomizeFormComponent},
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }