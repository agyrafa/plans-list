import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlanComponent} from './plan/plan.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'plans', component: PlanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
