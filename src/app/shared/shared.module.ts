import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';


@NgModule({
  declarations: [RestaurantCardComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    RestaurantCardComponent
  ]
})
export class SharedModule { }
