import { AfterContentChecked, AfterContentInit, Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/service/rooms.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  providers: [RoomsService] // For the instance of roomsservice to be used by employee only.
})
export class EmployeeComponent implements AfterContentInit {
  empName : string = "SAPANA";

  constructor (@Self() private roomService: RoomsService){} //using self  decorator will help throw exception if service is not present 
  // angular will not check for service in its parent, but throw the exception. If self had not been used, then angular would have checked
  // for service in its parent
  

  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }

}
