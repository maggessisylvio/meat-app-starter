import { Component, OnInit } from '@angular/core';
import { style, trigger, state, transition, animate } from '@angular/animations';
import { Restaurant } from 'app/models/restaurant.model';
import { RestaurantsServices } from 'app/services/restaurants.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({ opacity: 0, "max-height": "0px" })),
      state('visible', style({ opacity: 1, "max-height": "70px", "margin-top": "20px" })),
      transition('* => *', [
        animate('600ms 0s ease-in-out')
      ])
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  searchBarState = 'hidden';
  restaurants: Restaurant[];

  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(
    private restaurantsServices: RestaurantsServices,
    private formBuilder: FormBuilder,
    private restaurantsService: RestaurantsServices
  ) { }

  ngOnInit() {
    this.searchControl = this.formBuilder.control('');

    this.searchForm = this.formBuilder.group({
      searchControl: this.searchControl
    });

    this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(searchTerm => this.restaurantsService.getRestaurants(searchTerm)
        .catch(error => Observable.from([])))
      .subscribe(restaurants => this.restaurants = restaurants);

    this.restaurantsServices.getRestaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

  toggleSearch() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }

}
