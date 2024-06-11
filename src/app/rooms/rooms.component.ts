import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Room, RoomsList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, NgClass, NgFor, NgIf, NgStyle, UpperCasePipe } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { data } from 'browserslist';
import { RoomsService } from './service/rooms.service';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'hotel-rooms',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, NgStyle, DatePipe, LowerCasePipe, UpperCasePipe, CurrencyPipe, RoomsListComponent, HeaderComponent, JsonPipe],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})

export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {
// limiting service with priVATE TO TS FILE ONLY 
constructor(private roomsService : RoomsService){}

  ngAfterViewInit(): void {
    this.headerComponent.title = "title assigned";
  }
  hotelName = "Hyatt";

  numberOfBranches = "2";

  hideBranches = true;

  selectedRoom!: RoomsList;

  rooms: Room = {
    availableRooms: 1,
    bookedRooms: 5,
    totalRooms: 10
  };

  title = 'Room List';

  brooms: Room = {};

  roomList: RoomsList[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  ngOnInit(): void {

    //console.log(this.headerComponent);
    
    this.roomList = this.roomsService.getRooms();

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

  addRoom() {
    const room: RoomsList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air cond',
      price: 500,
      checkinTime: new Date('11-Nov-2024'),
      checkoutTime: new Date('13-Nov-2024'),
      pictures: 'pic'
    }

    //this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
