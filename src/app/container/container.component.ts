import { Component } from '@angular/core';
import { RoomsComponent } from '../rooms/rooms.component';
import { RoomsListComponent } from '../rooms/rooms-list/rooms-list.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [RoomsComponent, RoomsListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {

}
