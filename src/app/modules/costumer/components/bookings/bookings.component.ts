import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookingsWithCars: any[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadBookingsWithCars();
  }

  loadBookingsWithCars() {
    this.customerService.getBookings().subscribe(
      (bookingsResponse: any) => { // Corrección aquí
        // Iterar sobre cada reserva para obtener los detalles del carro
        bookingsResponse.forEach((booking: any) => { // Corrección aquí
          this.customerService.getCarbyId(booking.car_id).subscribe(
            (carResponse: any) => {
              // Agregar los detalles del carro a la reserva
              const bookingWithCar = {
                booking: booking,
                carDetails: carResponse
              };
              // Agregar la reserva con los detalles del carro al arreglo
              this.bookingsWithCars.push(bookingWithCar);
              console.log('Reserva con detalles de carro:', bookingWithCar);
            },
            (carError) => {
              console.error('Error al cargar los detalles del carro:', carError);
            }
          );
        });
      },
      (bookingError) => {
        console.error('Error al cargar las reservas:', bookingError);
      }
    );
  }
}
