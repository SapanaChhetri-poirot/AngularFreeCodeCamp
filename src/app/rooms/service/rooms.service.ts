import { Inject, Injectable, inject } from '@angular/core';
import { RoomsList } from '../rooms';
import { environment } from '../../../environments/environment';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  // Comment hardcoded data
  roomList : RoomsList[] = [
    // {
    //   roomNumber: 1,
    //   roomType: 'Deluxe Room',
    //   amenities: 'Air Conditioner, Mattress',
    //   price: 500,
    //   pictures: 'https://images.unsplash.com/photo-1518791841217-8f162f1e11312',
    //   checkinTime: new Date('11-Nov-2021'),
    //   checkoutTime: new Date('12-Nov-2021'),
    // },
    // {
    //   roomNumber: 2,
    //   roomType: 'Deluxe Room',
    //   amenities: 'Air Conditioner, Mattress',
    //   price: 2500,
    //   pictures: 'https://images.unsplash.com/photo-1518791841217-8f162f1e11312',
    //   checkinTime: new Date('21-Nov-2021'),
    //   checkoutTime: new Date('22-Nov-2021'),
    // },
    // {
    //   roomNumber: 3,
    //   roomType: 'Private Suite',
    //   amenities: 'Air Conditioner, Mattress',
    //   price: 1500,
    //   pictures: 'https://images.unsplash.com/photo-1518791841217-8f162f1e11312',
    //   checkinTime: new Date('16-Nov-2021'),
    //   checkoutTime: new Date('17-Nov-2021'),
    // },
  ];
  headers = new HttpHeaders({ 'token': '12345f'});
  getRooms$ = this.http.get<RoomsList[]>('/api/rooms', {
    headers : this.headers,
  }).pipe(
    shareReplay(1)
  );

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig, private http: HttpClient) {
    // use of injection DI (value provider)
    console.log("b " + this.config.appEndpoint);

    console.log("a " + environment.apiEndpoint);

    // make first api call
    // get call
   }

  getRooms() {    
    // Cretae http header
    const headers = new HttpHeaders({ 'token': '12345f'});
    return this.http.get<RoomsList[]>('/api/rooms', {
      headers: headers
    });
  }

  // Post
  addRoom(room: RoomsList){
    return this.http.post<RoomsList[]>('/api/rooms', room);
  }

  //Update
  editRoom(room: RoomsList){
    return this.http.put<RoomsList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  // Delete
  deleteRoom(id: string){
    return this.http.delete<RoomsList[]>(`/api/rooms/${id}`);
  }

  getPhotos(){
    // create http request
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`,{
      reportProgress : true, 
    });

    return this.http.request(request);
  }
}
