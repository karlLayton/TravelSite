import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

import { Trip, trips } from '../routeForm/data-model';

@Injectable()
export class TripService {

  delayMs = 500;

  // Fake server get; assume nothing can go wrong
  getTrips(): Observable<Trip[]> {
    return of(trips).delay(this.delayMs); // simulate latency with delay
  }

  // Fake server update; assume nothing can go wrong
  updateHero(trip: Trip): Observable<Trip>  {
    const oldTrip = trips.find(t => t.id === trip.id);
    const newTrip = Object.assign(oldTrip, trip); // Demo: mutate cached hero
    return of(newTrip).delay(this.delayMs); // simulate latency with delay
  }
}
