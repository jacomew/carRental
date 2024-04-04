import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(
    private authService: AuthService,
    private router: Router
    ){}

    register(formData: any){
      this.authService.register(formData).subscribe((res: any) => {
        console.log("Respuesta: ", res);
        if (res.message === 'User created successfully') {
          window.alert('Usuario creado exitosamente'); // Mostrar ventana emergente
          this.router.navigate(['/login']);
        } else {
          window.alert('Algo salió mal al crear el usuario.'); // Mostrar ventana emergente
        }
      });
    }

}
