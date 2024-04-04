import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { BookCarComponent } from './components/book-car/book-car.component';
import { BookingsComponent } from './components/bookings/bookings.component';

const routes: Routes = [
  {path:"", component: CustomerDashboardComponent},
  {path:"book/:id", component: BookCarComponent},
  {path:"bookings", component: BookingsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostumerRoutingModule { }
