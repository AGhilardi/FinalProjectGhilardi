import { HttpCommunicationsService } from './http-communications/http-communications.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [],
  providers: [HttpCommunicationsService, AuthService],
  imports: [HttpClientModule]
})
export class CoreModule { }