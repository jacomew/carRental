import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/components/signup/signup.component';
import { LoginComponent } from './auth/components/login/login.component';
import { CustomerDashboardComponent } from './modules/costumer/components/customer-dashboard/customer-dashboard.component';
import { BookCarComponent } from './modules/costumer/components/book-car/book-car.component';

const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"register", component: SignupComponent},
  {path:"login", component: LoginComponent},
  // {path:"customer", component: CustomerDashboardComponent},
  // {path:"customer/book/:id", component: BookCarComponent},
  {
    path: "admin",
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: "customer",
    loadChildren: () => import('./modules/costumer/costumer.module').then(m => m.CostumerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
