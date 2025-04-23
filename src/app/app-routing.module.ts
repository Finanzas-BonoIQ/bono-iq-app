import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './iam/pages/register/register.component';
import {DashboardComponent} from './dashboard/pages/dashboard/dashboard.component';
import {SignInComponent} from './iam/pages/sign-in/sign-in.component';
import {BondsListComponent} from './bonds/pages/bonds-list/bonds-list.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', component: DashboardComponent, pathMatch: "full" },
  { path: 'sign-in', component: SignInComponent },
  { path: 'my-bonds', component: BondsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
