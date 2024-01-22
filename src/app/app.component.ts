import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PasswordComponent } from './password/password.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PasswordComponent],
  template: `
    <main>
      <app-password></app-password>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'passApp';
}
