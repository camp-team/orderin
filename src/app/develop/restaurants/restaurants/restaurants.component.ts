import { Component, OnInit } from '@angular/core';
import { RestaurantGetService } from 'src/app/services/restaurant-get.service';
import { Restaurant } from 'src/app/interfaces/restaurant';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

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
    this.restaurantGetService.getRestaurants().subscribe((restaurants: Restaurant[]) => {
      this.restaurants = restaurants;
    });
  }

  ngOnInit(): void {
  }

}
