import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { C3DialogModule } from 'c3-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, C3DialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'c3-components-starter';
}
