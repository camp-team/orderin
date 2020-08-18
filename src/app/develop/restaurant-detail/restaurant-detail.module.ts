import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantDetailRoutingModule } from './restaurant-detail-routing.module';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';


@NgModule({
  declarations: [RestaurantDetailComponent],
  imports: [
    CommonModule,
    RestaurantDetailRoutingModule
  ]
})
export class RestaurantDetailModule { }
