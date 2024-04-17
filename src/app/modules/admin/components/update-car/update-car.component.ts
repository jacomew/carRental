import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {
  car: any = {}; // Variable para almacenar el carro
  updatedCarData: any = {};
  carId: string = ""; // Variable para almacenar el ID del carro

  constructor(private admService: AdminService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // Obtener el ID del carro de los parámetros de la ruta
    this.route.params.subscribe(params => {
      this.carId = params['id'];
      if (this.carId) {
        // Llamar al método para obtener el carro por su ID
        this.getCar(this.carId);
      } else {
        console.error('ID del carro no encontrado en la ruta');
      }
    });
  }

  getCar(id: string) {
    // Llamar al servicio para obtener el carro por su ID
    this.admService.getCarbyId(id).subscribe(
      (response: any) => {
        console.log('Carro obtenido:', response);
        this.car = response; // Asignar el carro obtenido a la variable car
      },
      (error) => {
        console.error('Error al obtener el carro:', error);
      }
    );
  }

  // Método para actualizar los datos del carro actualizado
  updateCarData(carData: any) {
    this.updatedCarData = carData;
  }

  updateCar(id: string) {
    // Mostrar los datos actualizados del carro en la consola
    console.log('Datos del carro actualizado:', this.updatedCarData);

    // Llamar al servicio para actualizar el carro
    this.admService.updateCar(id, this.updatedCarData).subscribe(
      (response: any) => {
        console.log('Carro actualizado:', response);

        // Mostrar mensaje de alerta en el navegador
        window.alert('El carro fue actualizado correctamente.');

        // Redirigir a la ruta /admin
        this.router.navigate(['/admin']);

        // Resetear los datos actualizados del carro
        this.updatedCarData = {};
      },
      (error) => {
        console.error('Error al actualizar el carro:', error);
        window.alert('ERROR AL ACTUALIZAR EL CARRO');
      }
    );
  }

}
