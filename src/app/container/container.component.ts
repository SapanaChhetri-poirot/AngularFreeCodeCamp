import { AfterContentInit, Component, ContentChild, viewChild } from '@angular/core';
import { RoomsComponent } from '../rooms/rooms.component';
import { RoomsListComponent } from '../rooms/rooms-list/rooms-list.component';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsBookingComponent } from '../rooms/rooms-booking/rooms-booking.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [RoomsComponent, RoomsListComponent, EmployeeComponent, RoomsBookingComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent implements AfterContentInit {

  @ContentChild(EmployeeComponent) contentEmployee! : EmployeeComponent;

  ngAfterContentInit(): void {
    console.log(this.contentEmployee);
  }

}
