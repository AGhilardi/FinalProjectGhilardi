import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegRoutingModule } from './reg-routing.module';
import { RegComponent } from './components/main/reg.component';
import { SharedModule } from '../../shared/shared.module';
import { RegService } from './services/reg.service';


@NgModule({
  declarations: [RegComponent],
  providers: [RegService],
  imports: [
    SharedModule,
    RegRoutingModule
  ]
})
export class RegModule { }
