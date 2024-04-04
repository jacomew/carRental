import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-car',
  templateUrl: './book-car.component.html',
  styleUrls: ['./book-car.component.css']
})
export class BookCarComponent implements OnInit {

  startDate: string = '';
  endDate: string = '';
  carId: string = '';
  car: any;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.carId = params['id'];
      this.getCar(this.carId);
    });
  }

  getCar(id: string) {
    this.customerService.getCarbyId(id).subscribe(
      (response: any) => {
        console.log('Carro obtenido:', response);
        this.car = response;
      },
      (error) => {
        console.error('Error al obtener el carro:', error);
      }
    );
  }

  bookCar() {
    if (!this.car || !this.startDate || !this.endDate) {
      window.alert('Por favor complete todos los campos para realizar la reserva.');
      return;
    }

    const reservationData = {
      car_id: this.car.id,
      book_car_status: 'reserved',
      from: this.startDate,
      to: this.endDate,
      price: this.car.price,
      user_id: '940cacae-cf76-4306-9aeb-a682532ba128' // Supongo que este es el ID del usuario
    };

    this.customerService.bookCarbyId(this.car.id, reservationData).subscribe(
      (response: any) => {
        if (response.message === 'Reservation added successfully') {
          window.alert('El carro se ha reservado exitosamente');
          // Agregar cualquier otra lógica después de la reserva exitosa
        } else {
          window.alert('Hubo un problema al reservar el carro: ' + response.message);
          // Manejar cualquier problema con la reserva
        }
      },
      (error) => {
        window.alert('Error al reservar el carro: ' + error.message);
        // Manejar errores de la solicitud
      }
    );
  }





}
