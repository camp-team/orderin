import { Component, OnInit } from '@angular/core';
import { RestaurantGetService } from 'src/app/services/restaurant-get.service';
import { Restaurant } from 'src/app/interfaces/restaurant';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

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
