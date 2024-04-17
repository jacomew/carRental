import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router,
              private authService: AuthService){}

  login(formData: any){
    if(formData.email === 'cliente@cliente.com' && formData.password === 'cliente'){
      this.router.navigateByUrl('/customer');
    }else if(formData.email === 'admin@admin.com' && formData.password === 'admin') {
      this.router.navigateByUrl('/admin');
    }
    else{
      window.alert('Credenciales incorrectas');
    }
  }

  // login(formData: any){
  //   this.authService.login(formData).subscribe(
  //     (response: any) => {
  //       // Verificar el contenido de la respuesta
  //       if (response.email) {
  //         // Si hay datos del usuario, la autenticación fue exitosa
  //         console.log('Login exitoso');
  //         console.log('Datos del usuario:', response);
  //         // Obtener el token (en esta demo, asignaremos un token estático)
  //         const token = 'abc';
  //         // Emitir una respuesta con los datos del usuario y el token
  //         const userDataWithToken = { user: response, token: token };
  //         console.log('Datos del usuario con token:', userDataWithToken);
  //         // Aquí puedes realizar cualquier otra acción con los datos del usuario y el token
  //       } else {
  //         // Si no hay datos del usuario, mostrar un mensaje de error genérico
  //         console.error('Correo o contraseña incorrectos');
  //       }
  //     },
  //     (error: any) => {
  //       // Manejar errores de conexión u otros errores
  //       window.alert('Credenciales incorrectas, inténtalo de nuevo.');
  //     }
  //   );
  // }




}
