import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    private apiUrl = environment.apiUrl + '/admin';

    constructor(private http: HttpClient, private authService: AuthService) { }

    private getHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Authorization': `Bearer ${this.authService.getToken()}`
        });
    }

    getDashboardStats(): Observable<any> {
        return this.http.get(`${this.apiUrl}/dashboard/stats`, { headers: this.getHeaders() });
    }

    // Users
    getAllUsers(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/users`, { headers: this.getHeaders() });
    }

    createUser(userData: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/users`, userData, { headers: this.getHeaders() });
    }

    updateUser(id: string, userData: any): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/users/${id}`, userData, { headers: this.getHeaders() });
    }

    updateUserStatus(id: string, status: number): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/users/${id}/status`, { status }, { headers: this.getHeaders() });
    }

    deleteUser(id: string): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/users/${id}`, { headers: this.getHeaders() });
    }

    updateUserRole(id: string, profile: string): Observable<any> {
        return this.http.put(`${this.apiUrl}/users/${id}/role`, { profile }, { headers: this.getHeaders() });
    }

    // --- Category APIs ---
    getAllCategories(): Observable<any> {
        return this.http.get(`${this.apiUrl}/categories`, { headers: this.getHeaders() });
    }

    createCategory(categoryData: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/categories`, categoryData, { headers: this.getHeaders() });
    }

    deleteCategory(id: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/categories/${id}`, { headers: this.getHeaders() });
    }

    // --- Shop APIs ---
    // Note: GET all shops usually comes from the public/common shop route but we can use that too
    getAllShops(): Observable<any> {
        return this.http.get(`${this.apiUrl}/shops`, { headers: this.getHeaders() });
    }

    createShop(shopData: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/shops`, shopData, { headers: this.getHeaders() });
    }

    updateShop(id: string, shopData: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/shops/${id}`, shopData, { headers: this.getHeaders() });
    }

    deleteShop(id: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/shops/${id}`, { headers: this.getHeaders() });
    }

    // --- Event APIs ---
    getAllEvents(): Observable<any> {
        return this.http.get(`${this.apiUrl}/events`, { headers: this.getHeaders() });
    }

    createEvent(eventData: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/events`, eventData, { headers: this.getHeaders() });
    }

    updateEvent(id: string, eventData: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/events/${id}`, eventData, { headers: this.getHeaders() });
    }

    deleteEvent(id: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/events/${id}`, { headers: this.getHeaders() });
    }

    // --- Content Moderation APIs ---
    getPendingOffers(): Observable<any> {
        return this.http.get(`${this.apiUrl}/offers/pending`, { headers: this.getHeaders() });
    }

    updateOfferStatus(id: string, status: string): Observable<any> {
        return this.http.put(`${this.apiUrl}/offers/${id}/status`, { status }, { headers: this.getHeaders() });
    }

    getAllReviews(): Observable<any> {
        return this.http.get(`${this.apiUrl}/reviews`, { headers: this.getHeaders() });
    }

    deleteReview(id: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/reviews/${id}`, { headers: this.getHeaders() });
    }
}
