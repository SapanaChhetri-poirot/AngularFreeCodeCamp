import { AfterViewInit, Component, ViewChild, ViewContainerRef, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

//  import { RoomsComponent } from './rooms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoomsComponent, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

@ViewChild('user', {read: ViewContainerRef}) vcr! : ViewContainerRef;

  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
  }
  
  title = 'hotelinventoryapp';

  loginType='Admin';
}
