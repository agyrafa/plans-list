import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlanComponent} from './plan/plan.component';

const routes: Routes = [
  { path: 'plans', component: PlanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
