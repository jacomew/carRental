import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCarComponent } from './components/post-car/post-car.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UpdateCarComponent } from './components/update-car/update-car.component';

const routes: Routes = [
  {path:"", component: AdminDashboardComponent},
  {path:"car", component: PostCarComponent},
  {path:"car/:id", component: UpdateCarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
