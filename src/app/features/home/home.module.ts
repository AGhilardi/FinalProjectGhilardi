import { NgModule, NgProbeToken } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/main/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GamesFacadeService } from '../games/service/games-facade.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    HomeRoutingModule,
    NgbModule
  ],
  providers:[
    GamesFacadeService
  ]
})
export class HomeModule { }