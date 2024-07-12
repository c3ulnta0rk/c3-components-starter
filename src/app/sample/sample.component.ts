import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { C3DialogModule, C3DialogService } from 'c3-components';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [CommonModule, C3DialogModule],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss',
})
export class SampleComponent {
  private readonly c3DialogService = inject(C3DialogService);
  openDD() {
    this.c3DialogService.confirm({
      text: 'Are you sure you want to delete this item?',
    });
  }
}
