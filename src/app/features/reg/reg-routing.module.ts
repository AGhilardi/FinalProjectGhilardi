import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegComponent } from './components/main/reg.component';

const routes: Routes = [{ path: '', component: RegComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegRoutingModule { }
