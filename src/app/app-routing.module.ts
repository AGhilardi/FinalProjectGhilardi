import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedGuardService } from './core/guards/logged-guard.service';
import { LoginGuardService} from 'src/app/core/guards/login-guard.service'
const routes: Routes = [
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule), canLoad:[LoggedGuardService], canActivate:[LoggedGuardService] },
  { path: 'reg', loadChildren: () => import('./features/reg/reg.module').then(m => m.RegModule), canLoad:[LoggedGuardService], canActivate:[LoggedGuardService] },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule), canLoad: [LoginGuardService], canActivate: [LoginGuardService] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
