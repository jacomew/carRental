import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router){}

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

}
