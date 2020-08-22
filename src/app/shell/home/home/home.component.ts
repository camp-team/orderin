import { Component, OnInit } from '@angular/core';
import { RestaurantGetService } from 'src/app/services/restaurant-get.service';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/interfaces/restaurant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  restaurants: Observable<Restaurant[]>;

  cuisines = [
    'Indian',
    'Korean',
    'Chinese',
    'Western',
    'Tibetan',
    'Cafe',
    'Bakery',
    'Dessert',
    'Italian',
    'Momos',
    'Fast Food',
    'Thai'
  ];

  constructor(
    private restaurantGetService: RestaurantGetService
  ) {
    this.restaurants = this.restaurantGetService.getRestaurants();
  }

  ngOnInit(): void {
  }

}
