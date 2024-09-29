import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from '../../hover.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HoverDirective],
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
