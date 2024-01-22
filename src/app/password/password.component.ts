import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent {
  password: string = '';
  passwordStrength: string = '';
  passwordLength: number = 0;

  updatePasswordStrength() {
    this.passwordLength = this.password.length;

    if (this.passwordLength === 0) {
      this.passwordStrength = '';
    } else if (this.passwordLength < 8) {
      this.passwordStrength = 'easy';
    } else if (/[a-zA-Z]/.test(this.password) && /[0-9]/.test(this.password) && /[^a-zA-Z0-9]/.test(this.password)) {
      this.passwordStrength = 'strong';
    } else {
      this.passwordStrength = 'medium';
    }
  }
}
