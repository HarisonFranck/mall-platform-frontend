import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
    selector: 'app-shop-management',
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatChipsModule,
    ],
    templateUrl: './shop-management.html',
    styleUrl: './shop-management.css',
})
export class ShopManagement {
    displayedColumns: string[] = ['name', 'category', 'location', 'status', 'actions'];
    dataSource = [
        { name: 'Fashion Hub', category: 'Vêtements', location: 'Étage 1', status: 'Ouvert' },
        { name: 'Tech Store', category: 'Électronique', location: 'Étage 2', status: 'Ouvert' },
        { name: 'Gourmet World', category: 'Alimentation', location: 'RdC', status: 'Fermé' },
        { name: 'Beauty Zone', category: 'Cosmétiques', location: 'Étage 1', status: 'Ouvert' },
    ];
}
