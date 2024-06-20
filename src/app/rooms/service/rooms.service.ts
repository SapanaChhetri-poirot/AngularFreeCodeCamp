import { Inject, Injectable, inject } from '@angular/core';
import { RoomsList } from '../rooms';
import { environment } from '../../../environments/environment';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList : RoomsList[] = [
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

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {

    console.log("b " + this.config.appEndpoint);
    console.log("a " + environment.apiEndpoint);
   }

  getRooms(){
return this.roomList;
  }
}
