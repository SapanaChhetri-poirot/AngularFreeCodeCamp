import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ContainerComponent } from './container/container.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { LoginComponent } from './rooms/login/login.component';

export const routes: Routes = [
    { path: 'employee', component: EmployeeComponent},
    { path: 'rooms', component: RoomsComponent},
    {path: 'rooms/add', component: RoomsAddComponent},
    {path:'login', component: LoginComponent},
    { path: 'rooms/:id', component: RoomsBookingComponent },
    { path: '', redirectTo:'/login', pathMatch:'full' }, // setting default path
    { path:'**', component: NotfoundComponent} // if a page is not found, then redirect to 404 or sth like that
];

// this module is to configure any routes we want to config
