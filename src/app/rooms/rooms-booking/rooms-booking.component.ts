import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-rooms-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.scss'
}) 
export class RoomsBookingComponent implements OnInit {

  roomId: number = 0;
  roomId$ !: Observable<number>;
  constructor(private router: ActivatedRoute)
  {

  }
  ngOnInit(): void {

    this.roomId$ = this.router.params.pipe(
      map(params => params['id'])
    );
    // snapshot will never receive a value if it is already in a value
    //this.roomId = this.router.snapshot.params['id'];
    // dont use subscribe if possible
    //this.router.params.subscribe((params) => { this.roomId = params['id'] });
  }
}
