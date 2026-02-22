import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-forgot-password',
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
    templateUrl: './forgot-password.html',
    styleUrl: './forgot-password.css',
})
export class ForgotPassword {
    forgotPasswordForm: FormGroup;
    submitted = false;

    constructor(private fb: FormBuilder) {
        this.forgotPasswordForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
        });
    }

    onSubmit() {
        if (this.forgotPasswordForm.valid) {
            console.log('Demande de réinitialisation pour:', this.forgotPasswordForm.value.email);
            this.submitted = true;
        }
    }
}
