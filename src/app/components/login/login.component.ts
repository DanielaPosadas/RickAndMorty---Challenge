import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup;
  errorMessage: string | undefined;
  isInvalidMessage: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  //Validando que el email y el password sean requeridas con ciertos caracteres y longitud
  initForm(){
    this.formLogin = this.formBuilder.group({
      email: ['',[Validators.required, Validators.pattern(/^[\w.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/)]],
      password: ['',[Validators.required, Validators.minLength(6)]]
    })
  }

  //Para resetear el form
  resetForm(){
    this.formLogin.reset()
  }

  //Oprimir el botón de ingresar y manejar respuesta o errores
  onSubmit(){
    const emailControl = this.formLogin.get('email')?.value;
    const passwordControl = this.formLogin.get('password')?.value;

    if(passwordControl !== '123456' || emailControl !== "user.name@gmail.com"){
      this.errorMessage = 'Credenciales inválidas. Inténtalo nuevamente.';
      this.isInvalidMessage = true;
      localStorage.clear();
      } else {
        localStorage.clear();
        console.log('Token: ', passwordControl)
        console.log('Token: ', emailControl)
        localStorage.setItem('accessToken', passwordControl);
        localStorage.setItem('idUser', emailControl);
        this.router.navigate(['/home']);
      }

      this.resetForm();
  }

  

}