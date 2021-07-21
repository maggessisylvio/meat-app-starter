import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/models/restaurant.model';
import { RestaurantsServices } from 'app/services/restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(private restaurantsServices: RestaurantsServices) { }

  ngOnInit() {
    this.restaurantsServices.getRestaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

}
