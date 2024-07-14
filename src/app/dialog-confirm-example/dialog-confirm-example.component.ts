import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { C3DialogModule, C3DialogService } from 'c3-components';

@Component({
  selector: 'app-dialog-confirm-example',
  standalone: true,
  imports: [CommonModule, C3DialogModule, MatButtonModule],
  templateUrl: './dialog-confirm-example.component.html',
  styleUrl: './dialog-confirm-example.component.scss',
})
export class DialogConfirmExampleComponent {
  private readonly dialogService = inject(C3DialogService);

  public dialogResult = signal<boolean | undefined>(undefined);

  public async openDialog() {
    const confirmResulst = await this.dialogService.confirm({
      text: 'Are you sure you want to delete this item?',
      reject: {
        color: 'warn',
        text: 'Cancel',
      },
      accept: {
        color: 'primary',
        text: 'Delete',
      },
    });

    this.dialogResult.set(confirmResulst);
  }
}
