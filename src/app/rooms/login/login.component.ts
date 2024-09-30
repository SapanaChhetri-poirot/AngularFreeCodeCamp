import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from '../../hover.directive';
import { CommonModule } from '@angular/common';
import { EmailvalidatorDirective } from '../../emailvalidator/emailvalidator.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HoverDirective, CommonModule, EmailvalidatorDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email: string = '';
  password: string='';

  login()
  {
    if (this.email ==="admin@gmail.com" && this.password ==="Admin")
    {
      alert("login successful");
    }
  }
}
