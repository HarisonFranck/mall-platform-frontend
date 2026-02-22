import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

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

    constructor(private fb: FormBuilder) {
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
            console.log('Logique d\'inscription ici', this.registerForm.value);
        }
    }
}
