import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;
  hidePassword = signal(true);

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
  }

  togglePasswordVisibility() {
    this.hidePassword.set(!this.hidePassword());
  }

  fillShortcut(email: string, password: string) {
    this.loginForm.patchValue({
      email: email,
      password: password,
      rememberMe: true
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Logique de connexion ici', this.loginForm.value);
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      const rememberMe = this.loginForm.get('rememberMe')?.value;
      if (email != null && email != "" && password)
        console.log(email, password, rememberMe);
    }
  }
}
