import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-post-car',
  templateUrl: './post-car.component.html',
  styleUrls: ['./post-car.component.css'] // Corrección: Utiliza 'styleUrls' en lugar de 'styleUrl'
})
export class PostCarComponent {

  car: any = {};

  constructor(
    private admService: AdminService,
    private router: Router
  ){}

  Cancelar(){
    this.router.navigate(['/admin']);
  }

  addcar(){
    this.admService.addCar(this.car).subscribe((res: any) => {
      console.log("Respuesta: ", res);
      if (res.message === 'Car added successfully') {
        window.alert('Carro agregado exitosamente'); // Mostrar ventana emergente
        this.router.navigate(['/admin']); // Redirigir a la página principal u otra página deseada
      } else {
        window.alert('Algo salió mal al agregar el carro.'); // Mostrar ventana emergente
      }
    });

      // console.log("Datos del carro a enviar:", this.car);

  }

}
