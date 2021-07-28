import { Component, Input, OnInit } from '@angular/core';
import { style, trigger, state, transition, animate } from '@angular/animations';
import { Restaurant } from 'app/models/restaurant.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  animations: [
    trigger('restaurantAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('600ms 0s ease-in-out')
      ])
    ])
  ]
})
export class RestaurantComponent implements OnInit {

  restaurantState = 'ready';

  @Input() restaurant?: Restaurant;

  constructor() { }

  ngOnInit() {
  }

}
