import { CurrencyPipe, DatePipe, LowerCasePipe, NgClass, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges, input, OnDestroy } from '@angular/core';
import { RoomsList, Room } from '../rooms';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [RouterModule, RouterOutlet ,NgIf, NgFor, NgClass, UpperCasePipe, CurrencyPipe, LowerCasePipe, DatePipe],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges, OnDestroy {

  ngOnDestroy(): void {
    console.log('on destroy is called');
  }
ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
  if(changes['title']){
this.title = changes['title'].currentValue;
  }
}
// get data using component communication
@Input() rooms : RoomsList[] = [];

@Input() title: string = '';

// create event to send information to parent
@Output() selectedRoom = new EventEmitter<RoomsList>();
// @Output() selectedRoom : EventEmitter<Record<keyof RoomsList, any[]>> = new EventEmitter<Record<keyof RoomsList, any[]>>();

selectRoom(room: RoomsList){
  this.selectedRoom.emit(room); 
  // emit back to parent
}
}
