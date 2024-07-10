import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Room, RoomsList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, NgClass, NgFor, NgIf, NgStyle, UpperCasePipe } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { data } from 'browserslist';
import { RoomsService } from './service/rooms.service';
import { ThisReceiver } from '@angular/compiler';
import { Observable } from 'rxjs';


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

  stream = new Observable(observer => {
    observer.next('user1') // next will be emitting new data, subscriber will get this data
    observer.next('user2')
    observer.next('user3')
    observer.complete()
  });

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  ngOnInit(): void {

    //console.log(this.headerComponent);
    
    // fetch data and subscribe to it
    this.roomsService.getRooms().subscribe(rooms => {
      this.roomList = rooms;
    });

    this.stream.subscribe((data) => console.log(data));

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
      //roomNumber: '4',
      roomType: 'Deluxe Room',
      amenities: 'Air cond',
      price: 500,
      checkinTime: new Date('11-Nov-2024'),
      checkoutTime: new Date('13-Nov-2024'),
      pictures: 'pic'
    }

    //this.roomList.push(room);
    //this.roomList = [...this.roomList, room];

    this.roomsService.addRoom(room).subscribe((data) =>{
        this.roomList = data;
    })
  }
}
