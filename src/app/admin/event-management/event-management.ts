import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
    selector: 'app-event-management',
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatChipsModule,
    ],
    templateUrl: './event-management.html',
    styleUrl: './event-management.css',
})
export class EventManagement {
    displayedColumns: string[] = ['title', 'date', 'location', 'type', 'actions'];
    dataSource = [
        { title: 'Soldes d\'été', date: '2026-06-15', location: 'Toute la galerie', type: 'Promotion' },
        { title: 'Concert de Jazz', date: '2026-03-10', location: 'Place Centrale', type: 'Animation' },
        { title: 'Atelier Cuisine', date: '2026-02-28', location: 'Espace Gourmand', type: 'Atelier' },
    ];
}
