import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {

  carList: any[] = []; // Lista de carros

  constructor(
    private admService: AdminService
  ){}

  ngOnInit() {
    this.getCars(); // Llama al método getCars() al cargar el componente
  }

  getCars() {
    this.admService.getCars().subscribe((res: any) => {
      console.log("Lista de carros:", res);
      this.carList = res; // Asigna la lista de carros obtenida al array carList
    }, (error) => {
      console.error("Error al obtener la lista de carros:", error);
    });
  }

  deleteCar(id: string) {
    this.admService.deleteCarbyId(id).subscribe(
      (res: any) => {
        console.log("Carro eliminado:", res);
        // Vuelve a cargar la lista de carros después de eliminar uno
        this.getCars();
      },
      (error) => {
        console.error("Error al eliminar el carro:", error);
      }
    );
  }

}

