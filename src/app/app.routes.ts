import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ContainerComponent } from './container/container.component';

export const routes: Routes = [
    { path: 'employee', component: EmployeeComponent},
    { path: 'rooms', component: RoomsComponent},
    //{ path: '', redirectTo:'/rooms', pathMatch:'full' }, // setting default path
];

// this module is to configure any routes we want to config
