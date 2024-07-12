import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  errorMessage: string | undefined;
  isInvalidMessage: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formLogin = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[\w.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  resetForm() {
    this.formLogin.reset();
  }

  onSubmit() {
    const emailControl = this.formLogin.get('email')?.value;
    const passwordControl = this.formLogin.get('password')?.value;

    if (
      passwordControl !== '123456' ||
      emailControl !== 'user.name@gmail.com'
    ) {
      this.errorMessage = 'Credenciales inválidas. Inténtalo nuevamente.';
      this.isInvalidMessage = true;
      localStorage.clear();
    } else {
      localStorage.clear();
      console.log('Token: ', passwordControl);
      console.log('Token: ', emailControl);
      localStorage.setItem('accessToken', passwordControl);
      localStorage.setItem('idUser', emailControl);
      this.router.navigate(['/home']);
    }

    this.resetForm();
  }
}
