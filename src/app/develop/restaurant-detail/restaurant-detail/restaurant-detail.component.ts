import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantGetService } from 'src/app/services/restaurant-get.service';
import { Restaurant } from 'src/app/interfaces/restaurant';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Observable<Restaurant>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantGetService: RestaurantGetService,
    private location: Location
  ) {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      const id = params.get('id');
      this.restaurant = this.restaurantGetService.getRestaurant(id);
    });
  }

  ngOnInit(): void {
  }

  navigateBack() {
    this.location.back();
  }

}
