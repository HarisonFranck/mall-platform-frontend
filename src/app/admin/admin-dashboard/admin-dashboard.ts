import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
  ],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {
  stats = [
    { label: 'Total Boutiques', value: '42', icon: 'store', color: '#2196f3' },
    { label: 'Événements Actifs', value: '5', icon: 'event_available', color: '#4caf50' },
    { label: 'Visiteurs Aujourd\'hui', value: '1,284', icon: 'trending_up', color: '#ff9800' },
    { label: 'Alertes Système', value: '0', icon: 'check_circle', color: '#9c27b0' },
  ];
}
