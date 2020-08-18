import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantGetService } from 'src/app/services/restaurant-get.service';
import { Restaurant } from 'src/app/interfaces/restaurant';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantGetService: RestaurantGetService
  ) {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      const id = params.get('id');
      this.restaurantGetService.getRestaurant(id).subscribe((restaurant: Restaurant) => {
        this.restaurant = restaurant;
      });
    });
  }

  ngOnInit(): void {
  }

}
