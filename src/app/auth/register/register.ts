import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        RouterLink,
    ],
    templateUrl: './register.html',
    styleUrl: './register.css',
})
export class Register {
    registerForm: FormGroup;
    hidePassword = signal(true);
    hideConfirmPassword = signal(true);

    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
        this.registerForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
        }, { validators: this.passwordMatchValidator });
    }

    passwordMatchValidator(g: FormGroup) {
        return g.get('password')?.value === g.get('confirmPassword')?.value
            ? null : { mismatch: true };
    }

    togglePasswordVisibility() {
        this.hidePassword.set(!this.hidePassword());
    }

    toggleConfirmPasswordVisibility() {
        this.hideConfirmPassword.set(!this.hideConfirmPassword());
    }

    onSubmit() {
        if (this.registerForm.valid) {
            const { name, email, password } = this.registerForm.value;
            this.authService.registerCustomer({ name, email, password }).subscribe({
                next: (res) => {
                    console.log('Inscription réussie', res);
                    this.router.navigate(['/client/home']);
                },
                error: (err) => {
                    console.error('Erreur d\'inscription', err);
                    alert('Erreur: ' + (err.error?.message || err.message));
                }
            });
        }
    }
}
