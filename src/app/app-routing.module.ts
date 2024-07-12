import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './core/auth.guard';
import { LoginGuardGuard } from './core/loginGuard/login-guard.guard';
import { ModalComponent } from './components/modal/modal.component';
import { NotFoundPathComponent } from './views/not-found-path/not-found-path.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuardGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'modal',
    component: ModalComponent,
  },
  {
    path: '**',
    component: NotFoundPathComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
