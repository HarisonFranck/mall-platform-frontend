import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRippleModule } from '@angular/material/core';
import { AdminService } from '../../core/services/admin.service';
import { RouterLink } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

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
    MatTabsModule,
    MatRippleModule,
    RouterLink
  ],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard implements OnInit {
  stats: any[] = [];
  isLoading = true;

  // Mock data for charts
  performanceData = [45, 52, 38, 65, 48, 72, 58];
  categoriesData = [
    { label: 'Mode', value: 40, color: '#0ca678' },
    { label: 'Alimentation', value: 25, color: '#4dabf7' },
    { label: 'Loisirs', value: 20, color: '#ff922b' },
    { label: 'Autre', value: 15, color: '#845ef7' }
  ];

  constructor(
    private adminService: AdminService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.adminService.getDashboardStats().subscribe({
        next: (res) => {
          if (res && res.stats) {
            this.stats = res.stats.map((s: any) => ({
              title: s.title,
              value: s.value.toString(),
              icon: s.icon,
              color: this.getColorForIcon(s.icon)
            }));
          }
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error fetching dashboard stats', err);
          this.isLoading = false;
        }
      });
    }
  }

  getColorForIcon(icon: string): string {
    const colors: { [key: string]: string } = {
      'storefront': '#4f46e5',
      'people': '#8b5cf6',
      'person_add': '#10b981',
      'pending_actions': '#f59e0b'
    };
    return colors[icon] || '#607d8b';
  }

  exportPDF() {
    const doc = new jsPDF();

    // Header
    doc.setFontSize(22);
    doc.setTextColor(12, 166, 120); // Primary green
    doc.text('Rapport Mall Platform', 14, 22);

    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.text(`Date d'exportation : ${new Date().toLocaleDateString()}`, 14, 30);

    // Stats summary
    doc.setFontSize(14);
    doc.setTextColor(40);
    doc.text('Aperçu des performances', 14, 45);

    const tableData = this.stats.map(s => [s.title, s.value]);

    autoTable(doc, {
      startY: 50,
      head: [['Indicateur', 'Valeur (Actuelle)']],
      body: tableData,
      theme: 'striped',
      headStyles: { fillColor: [12, 166, 120] },
      margin: { left: 14 }
    });

    const finalY = (doc as any).lastAutoTable.finalY + 15;
    doc.setFontSize(14);
    doc.text('Répartition des boutiques', 14, finalY);

    const categoryData = this.categoriesData.map(c => [c.label, c.value + '%']);

    autoTable(doc, {
      startY: finalY + 5,
      head: [['Catégorie', 'Proportion']],
      body: categoryData,
      theme: 'grid',
      headStyles: { fillColor: [16, 152, 173] }, // Secondary blue
      margin: { left: 14 }
    });

    doc.save('rapport-mall-platform.pdf');
  }
}
