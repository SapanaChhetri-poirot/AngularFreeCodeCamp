import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Room, RoomsList } from './rooms';
import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, NgClass, NgFor, NgIf, NgStyle, UpperCasePipe } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { data } from 'browserslist';


@Component({
  selector: 'hotel-rooms',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, NgStyle, DatePipe, LowerCasePipe, UpperCasePipe, CurrencyPipe, RoomsListComponent, JsonPipe],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})

export class RoomsComponent implements OnInit, DoCheck {
  hotelName = "Hyatt";

  numberOfBranches = "2";

  hideBranches = false;

selectedRoom! : RoomsList;

  rooms: Room = {
    availableRooms: 1,
    bookedRooms: 5,
    totalRooms: 10
  };

  title = 'Room List';

  brooms: Room = {};

  roomList: RoomsList[] = [];


  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Mattress',
        price: 500,
        pictures: 'https://images.unsplash.com/photo-1518791841217-8f162f1e11312',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Mattress',
        price: 2500,
        pictures: 'https://images.unsplash.com/photo-1518791841217-8f162f1e11312',
        checkinTime: new Date('21-Nov-2021'),
        checkoutTime: new Date('22-Nov-2021'),
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, Mattress',
        price: 1500,
        pictures: 'https://images.unsplash.com/photo-1518791841217-8f162f1e11312',
        checkinTime: new Date('16-Nov-2021'),
        checkoutTime: new Date('17-Nov-2021'),
      },
    ];
  }

  ngDoCheck(): void {
    console.log('On Do Check is called');
  }

  toggle() {
    this.hideBranches = !this.hideBranches;
    this.title = "List of Rooms";
  }

  selectsRoom(room: RoomsList) {
    this.selectedRoom = room;
    console.log(room);
  }

  addRoom(){
    const room: RoomsList={
      roomNumber : 4,
       roomType:'Deluxe Room',
       amenities:'Air cond',
       price: 500,
       checkinTime: new Date('11-Nov-2024'),
       checkoutTime: new Date('13-Nov-2024'),
       pictures:'pic'
    }

    //this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
