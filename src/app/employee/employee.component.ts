import { AfterContentChecked, AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements AfterContentInit {
  empName : string = "SAPANA";

  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }

}
