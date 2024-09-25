import { AfterViewInit, Component, ViewChild, ViewContainerRef, Inject, viewChild, Injectable, OnInit, afterNextRender } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import {LocalStorageToken} from './localstorage.token';
import { AppNavComponent } from "./app-nav/app-nav.component";
//  import { RoomsComponent } from './rooms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, EmployeeComponent, RoomsComponent, RoomsListComponent, HeaderComponent, RoomsBookingComponent, ContainerComponent, NgSwitch, NgSwitchCase, NgSwitchDefault, AppNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnInit {

@ViewChild('user', {read: ViewContainerRef}) vcr! : ViewContainerRef;

  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
  }

  constructor(@Inject(LocalStorageToken) private localStorage: Storage){
    afterNextRender(()=>{
      const storedData = localStorage.getItem('auth');
      if (storedData) {
        try {
          console.log("Helllo");
        }
        catch (err) {
        }
      }
    });
  }
  ngOnInit(): void {
    // set an item to local storage
    // in angular.json 
      // Commented because it restricts the use of localstorage api
            //"prerender": true,
            //"ssr": {
            //  "entry": "server.ts"
            //}

    // replaced with prerenderer: false and ssr to false        
    this.localStorage.setItem('name', 'hyatt');
  }
  
  title = 'hotelinventoryapp';

  loginType='Admin';
}
