import { LoginComponent } from './login/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
 {path:'login', component:LoginComponent},
 {
    path: 'films',
    loadChildren: './films/films.module#FilmsModule',
    canLoad: [AuthGuard]
  },
 {
    path: 'user-zone',
    loadChildren: './user-zone/user-zone.module#UserZoneModule',
    canLoad: [AuthGuard]
  },
  {path:'', redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
