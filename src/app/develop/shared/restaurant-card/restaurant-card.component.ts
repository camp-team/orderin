import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from 'src/app/interfaces/restaurant';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent implements OnInit {

  @Input() restaurant: Restaurant;

  constructor() { }

  ngOnInit(): void {
  }

}
