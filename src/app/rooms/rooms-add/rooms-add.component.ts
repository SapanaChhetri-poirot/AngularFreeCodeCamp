import { Component,  } from '@angular/core';
import { RoomsList } from '../rooms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RoomsService } from '../service/rooms.service';

@Component({
  selector: 'app-rooms-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './rooms-add.component.html',
  styleUrl: './rooms-add.component.scss'
})
export class RoomsAddComponent {
  room : RoomsList = {
    roomType: '',
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    pictures: '',
    price: 0
  }
successMessage : string = "";
  constructor(private roomsService: RoomsService){

  }

  AddRoom(){
    this.roomsService.addRoom(this.room). subscribe((data) => {
    
    this.successMessage = 'Successful';
  });
  }
}
