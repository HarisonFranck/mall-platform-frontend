import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-confirm-dialog',
    standalone: true,
    imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
    template: `
    <div class="confirm-dialog-premium">
      <div class="icon-circle delete">
        <mat-icon>warning_amber</mat-icon>
      </div>
      <h2 mat-dialog-title>Confirmer la suppression</h2>
      
      <mat-dialog-content>
        <p class="message">{{ data.message }}</p>
        <div class="target-info" *ngIf="data.targetName">
          <span class="label">Élément concerné :</span>
          <span class="value">{{ data.targetName }}</span>
        </div>
        <p class="warning-text">Cette action est irréversible.</p>
      </mat-dialog-content>
      
      <mat-dialog-actions align="end" class="dialog-actions">
        <button mat-button (click)="onCancel()" class="cancel-btn">Annuler</button>
        <button mat-flat-button class="delete-btn" (click)="onConfirm()">
          Supprimer définitivement
        </button>
      </mat-dialog-actions>
    </div>
  `,
    styles: [`
    .confirm-dialog-premium {
      padding: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      min-width: 400px;
    }
    .icon-circle {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      background: rgba(239, 68, 68, 0.1);
    }
    .icon-circle mat-icon {
      font-size: 32px;
      width: 32px;
      height: 32px;
      color: #ef4444;
    }
    h2 {
      margin: 0 0 16px 0;
      font-size: 22px;
      font-weight: 700;
      color: var(--text-main);
    }
    .message {
      font-size: 15px;
      color: var(--text-color);
      margin: 0 0 16px 0;
      line-height: 1.5;
    }
    .target-info {
      background: #f8f9fa;
      padding: 12px 16px;
      border-radius: 8px;
      border: 1px solid var(--border);
      margin-bottom: 16px;
      font-size: 14px;
    }
    .target-info .label {
      color: var(--text-muted);
      margin-right: 8px;
    }
    .target-info .value {
      font-weight: 600;
      color: var(--text-main);
    }
    .warning-text {
      font-size: 13px;
      color: #ef4444;
      font-weight: 500;
      margin: 0;
    }
    .dialog-actions {
      margin-top: 32px;
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 16px;
    }
    .cancel-btn {
      color: var(--text-muted);
      font-weight: 600;
      border-radius: 10px;
      padding: 0 20px;
      height: 44px;
    }
    .delete-btn {
      background-color: #ef4444;
      color: white;
      font-weight: 600;
      border-radius: 10px;
      padding: 0 24px;
      height: 44px;
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
    }
  `]
})
export class ConfirmDialog {
    constructor(
        public dialogRef: MatDialogRef<ConfirmDialog>,
        @Inject(MAT_DIALOG_DATA) public data: { message: string, targetName?: string }
    ) { }

    onCancel(): void {
        this.dialogRef.close(false);
    }

    onConfirm(): void {
        this.dialogRef.close(true);
    }
}
