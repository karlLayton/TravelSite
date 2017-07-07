import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

import { Trip } from '../routeForm/data-model';
import { TripService } from './trip.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {
  trips: Observable<Trip[]>;
  isLoading = false;
  selectedTrip: Trip;

  constructor(private heroService: TripService) { }

  ngOnInit() { this.getHeroes(); }

  getHeroes() {
    this.isLoading = true;
    this.trips = this.tripService.getHeroes()
                      // Todo: error handling
                      .finally(() => this.isLoading = false);
    this.selectedTrip = undefined;
  }

  select(trip: Trip) { this.selectedTrip = trip; }
}
