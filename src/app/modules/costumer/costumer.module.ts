import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostumerRoutingModule } from './costumer-routing.module';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { FormsModule } from '@angular/forms';
import { BookCarComponent } from './components/book-car/book-car.component';
import { BookingsComponent } from './components/bookings/bookings.component';



@NgModule({
  declarations: [
    CustomerDashboardComponent,
    BookCarComponent,
    BookingsComponent
  ],
  imports: [
    CommonModule,
    CostumerRoutingModule,
    FormsModule
  ]
})
export class CostumerModule { }
