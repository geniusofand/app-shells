import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OssAppRoute } from 'oss-app-layout';

import { MyAccountComponent } from './my-account/my-account.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: '', component: UserDashboardComponent },
  { path: OssAppRoute.userPreferences, component: MyAccountComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
