import { LayoutComponent } from './layout/layout/layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/authentication/login',
    pathMatch:'full'
  },
  {
    path: 'authentication',
    component: AuthLayoutComponent,
    loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule)
  },
  {
    path: 'system-users',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    loadChildren: () => import('./system-users/system-users.module').then((m) => m.SystemUsersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
