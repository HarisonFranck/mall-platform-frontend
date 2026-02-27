import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface AuthResponse {
    token: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = environment.apiUrl + '/auth';
    private isBrowser: boolean;

    constructor(
        private http: HttpClient,
        @Inject(PLATFORM_ID) platformId: any
    ) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    login(credentials: any): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials).pipe(
            tap(res => this.setToken(res.token))
        );
    }

    registerCustomer(userData: any): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(`${this.apiUrl}/customer/sign-up`, userData).pipe(
            tap(res => this.setToken(res.token))
        );
    }

    setToken(token: string) {
        if (this.isBrowser) {
            localStorage.setItem('auth_token', token);
        }
    }

    getToken(): string | null {
        if (this.isBrowser) {
            return localStorage.getItem('auth_token');
        }
        return null;
    }

    logout() {
        if (this.isBrowser) {
            localStorage.removeItem('auth_token');
        }
    }

    isAuthenticated(): boolean {
        return !!this.getToken();
    }
}
