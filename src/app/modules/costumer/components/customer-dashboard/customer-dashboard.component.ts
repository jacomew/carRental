import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.css'
})
export class CustomerDashboardComponent implements OnInit {

  carList: any[] = []; // Lista de carros

  constructor(private customerService: CustomerService){}

  ngOnInit() {
    this.getCars(); // Llama al método getCars() al cargar el componente
  }

  getCars() {
    this.customerService.getCars().subscribe((res: any) => {
      console.log("Lista de carros:", res);
      this.carList = res; // Asigna la lista de carros obtenida al array carList
    }, (error) => {
      console.error("Error al obtener la lista de carros:", error);
    });
  }

}
